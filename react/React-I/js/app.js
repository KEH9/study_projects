var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];


//---------------------------------------------------------

window.ee = new EventEmitter();


//---------------------------------------------------------


var Article = React.createClass({

  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  },

  getInitialState: function () {
    return {
      visible: false
    }
  },

  readMoreClick: function (e) {
    e.preventDefault();
    this.setState({visible: true});
  },

  render: function() {
    var author = this.props.data.author,
      text = this.props.data.text,
      bigText = this.props.data.bigText,
      visible = this.state.visible;

    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <a href="#"
           onClick={this.readMoreClick}
           className={'news__readmore ' + (visible ? 'none' : '')}>
          Подробнее
        </a>
        <p className={"news__big-text " + (visible ? '' : 'none')}>{bigText}</p>
      </div>
    )
  }
});

//---------------------------------------------------------

var News = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function () {

    var data = this.props.data;
    var newsMassive;
    if (data.length > 0){

      newsMassive = data.map(function(item, index) {
        return (
          <div key={data.length - index}>
            <Article data={item} />
          </div>
        )
      });
    } else {
      newsMassive = <p>Нет новостей!</p>
    }


    return (
      <div onClick={this.newsClick} className="news">
        {newsMassive}
        <strong className={"news__count " + (data.length > 0 ? "" : "none")}>Количество новостей: {data.length}</strong>
      </div>
    );
  }
});


//---------------------------------------------------------


var Add = React.createClass ({

  getInitialState: function () {
      return {
        agree: false,
        authorFilled: false,
        textFilled: false
    }
  },


  componentDidMount: function () {
    ReactDOM.findDOMNode(this.refs.Author).focus();
//    ReactDOM.findDOMNode(this.refs.alert_button).disabled = true;

  },

  onClickHandler: function (e) {

    e.preventDefault();
//    alert(ReactDOM.findDOMNode(this.refs.Author).value + '\n' + ReactDOM.findDOMNode(this.refs.NewsText).value);
    console.log(this.refs);

    var textEl = ReactDOM.findDOMNode(this.refs.NewsText);

    var item = [{
      author: ReactDOM.findDOMNode(this.refs.Author).value,
      text: ReactDOM.findDOMNode(this.refs.NewsText).value,
      bigText: '...'
    }];

    window.ee.emit('News.add', item);

    textEl.value = '';
    this.setState({textFilled: false});

  },

  onCheckboxChange: function (e) {
    this.setState({agree: e.target.checked});
  },


  onFieldChange: function (fieldName, e) {
    if (e.target.value.trim() !== '') {
      this.setState({[fieldName]: true});
    } else {
      this.setState({[fieldName]: false})
    }
  },

  render: function () {
    return (

      <form className='add_cf'>
      <input
        className='add__author'
        defaultValue=''
        placeholder="Автор"
        ref='Author'
        onChange={this.onFieldChange.bind(this, 'authorFilled')}
         />
        <textarea
          className='add__text'
          defaultValue=''
          placeholder="Текст новости"
          ref='NewsText'
          onChange={this.onFieldChange.bind(this, 'textFilled')}
          ></textarea>
        <label className='add__checkrule'>
        <input type="checkbox" defaultChecked={false} ref='checkrule' onChange={this.onCheckboxChange} />
          Я согласен с правилами
        </label>
      <button
        className='add__btn'
        onClick={this.onClickHandler}
        ref='alert_button'
        disabled={!(this.state.agree && this.state.authorFilled && this.state.textFilled)}
      >Добавить новость</button>
        </form>

    )
  }
});


//---------------------------------------------------------


var App = React.createClass({

  getInitialState: function () {
    return {
      news: my_news
    }
  },


  componentDidMount: function () {
    var self = this;
    window.ee.addListener('News.add', function (item) {
      var nextNews = item.concat(self.state.news);
      self.setState({news: nextNews})
    });
  },


  componentWillUnmount: function () {
    window.ee.removeListener('News.add');
  },


  render: function () {
    return (
      <div className="app">
        <Add />
        <h3>Новости</h3>
        <News data={this.state.news} />
      </div>
    );
  }
});


//---------------------------------------------------------



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

