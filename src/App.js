import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
var Scroll = require('react-scroll');
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navpos:'relative',
      onWheel:'',
      classNames:''
    }
  }
  componentDidMount(){
    var onWheel = () =>{
      var top = ReactDOM.findDOMNode(this.refs.navbar).offsetTop - document.body.scrollTop;
      if(top <= 0){
        this.setState({navpos:'fixed'});
      }else{
        this.setState({navpos:'relative'});
      }
      var classNames = this.state.classNames;
      var anis = ['resume','skill_contain','exp_left0','exp_right','exp_left1'];
      var ani = [];
      for (var i in anis){
        ani[i] = ReactDOM.findDOMNode(this.refs[anis[i]]).offsetTop - document.body.scrollTop;
      }
      if(ani[0] <= 20 && ReactDOM.findDOMNode(this.refs[anis[0]]).className == anis[0] + ' '){
        this.setState({classNames:'lightSpeedIn animated'})
      }
      if(ani[1] <= 20 && ReactDOM.findDOMNode(this.refs[anis[0]]).className == anis[0] + ' '){
        this.setState({classNames:'jello  animated'})
      }
      if(ani[2] <= 20 && ReactDOM.findDOMNode(this.refs[anis[0]]).className == anis[0] + ' '){
        this.setState({classNames:'fadeInLeft animated'})
      }
      if(ani[3] <= 20 && ReactDOM.findDOMNode(this.refs[anis[0]]).className == anis[0] + ' '){
        this.setState({classNames:'fadeInRight animated'})
      }
      if(ani[4] <= 20 && ReactDOM.findDOMNode(this.refs[anis[0]]).className == anis[0] + ' '){
        this.setState({classNames:'fadeInLeft animated'})
      }
    }
    window.addEventListener('scroll',onWheel);
  }
  render() {
    var style = {
      position:this.state.navpos
    }
    return (
      <div className="App">
        <div className = "head">
          <h1>mY name is YOKE YANG</h1>
          <h2>你好，我的名字叫杨宇坤</h2>
          <Link to="resume" activeClass="active" spy={true} smooth={true} offset={-20} duration={1000}>
            <img className = "arrows bounce infinite animated" src ={require('../public/arrows-white.svg')} ></img>
          </Link>
        </div>
        <div className = "navouter" ref = 'navbar'>
          <div className = "navbar" style = {style}>
          <a href = "#" className = "nav">YokeYang</a>
          <div className = "nav">
            <Link to="resume" activeClass="active" spy={true} smooth={true} offset={-20} duration={1000}>
              <a href = "#" className = "navright_a">个人简介</a>
            </Link>
            <Link to="skill" activeClass="active" spy={true} smooth={true} offset={-20} duration={1000}>
              <a href = "#" className = "navright_a">基本技能</a>
            </Link>
            <Link to="experiences" activeClass="active" spy={true} smooth={true} offset={-20} duration={1000}>
              <a href = "#" className = "navright_a">项目经验</a>
            </Link>
            <Link to="expect" activeClass="active" spy={true} smooth={true} offset={-20} duration={1000}>
              <a href = "#" className = "navright_a">未来展望</a>
            </Link>
          </div>
        </div>
        </div>
        <div className = "intro_contain">
          <div className = {"resume "+this.state.classNames} id = "resume" ref = 'resume'>
            <h1 className = "title">个人简介</h1>
            <div className = "links">
              <div className = "link">
                <a href = "#">
                  <img src = {require('../public/img/github.png')}></img>
                  <h4>Github</h4>
                </a>
              </div>
              <div className = "link">
                <a href = "#">
                  <img src = {require('../public/img/gmail.png')}></img>
                  <h4>Gmail</h4>
                </a>
              </div>
              <div className = "link">
                <a href = "#">
                  <img src = {require('../public/img/tel.png')}></img>
                  <h4>86 130-9887-8963</h4>
                </a>
              </div>
              <div className = "link">
                <a href = "#">
                  <img src = {require('../public/img/wechat.png')}></img>
                  <h4>Wechat</h4>
                </a>
              </div>
            </div>
            <div className = "origin">
              <div className = "orileft">
                <p><span>姓名</span> | 杨宇坤 - YokeYang</p>
                <p><span>学校</span> :</p>
                <p className = "schools"><span>本科</span> | 武汉工程大学（2015-9，2019-6）</p>
                <p className = "schools"><span>研究生</span> | </p>
                <p><span>专业</span> | 软件工程</p>
                <p><span>github</span> | <a href = "#">yokeyang</a></p>
              </div>
              <div className = "oriright">
                <p>自2015年进入大学开始，学习前端相关知识，在学校大神<strong>itjesses（github）</strong>的指导下，见证了自己作为一个前端小白
                  到前端爱好者的发展历程；喜欢前端，正如一句话说的那样，前端是设计与技术的结合
                </p>
                <p>两年的时间，自己学习了前端的基础知识，了解并掌握了HTML、CSS、JS、JQUERY等前端基础知识，并且对于一些主流的前端框架以及前端工具
                  服务器端语言都有所涉及和了解
                </p>
              </div>
            </div>
          </div>
          <div className = "skill" id = "skill">
            <h1 className = "title">基本技能</h1>
            <div className = {"skill_contain "+this.state.classNames} ref = 'skill_contain'>
              <p><span>css</span><span>css3</span></p>
              <p><span>javascript</span><span>jquery</span><span>react.js</span></p>
              <p><span>HTML</span><span>Bootstrap</span></p>
              <p><span>Git</span><span>webpack</span></p>
            </div>
          </div>
          <div className = "experiences" id = "experiences">
            <h1 className = "title">项目经验</h1>
            <div className = "exp_contain">
              <div className = {"exp_left "+this.state.classNames} ref = 'exp_left0'>
                <h1>武汉小强科技有限公司</h1>
                <h2>2015.09-2016.06</h2>
                <p>负责开发校园失物招领平台</p>
                <p>使用原生js+jquery开发，ajax异步提交，PHP链接前端页面和mysql数据库;最终可以实现用户的登记、提交、查询等功能</p>
                <p>github：https://github.com/yokeyang/lost-found</p>
              </div>
              <div className = {"exp_right "+this.state.classNames} ref = 'exp_right'>
                <h1>武汉新东方前途出国</h1>
                <h2>2016.11-</h2>
                <p>负责新东方志领计划、留学导航页面(demo)前端页面开发</p>
                <p>使用了reactjs，部分页面采用原生js，独立完成；页面仍处于完善阶段，等待信息的填充后完成上线</p>
                <p>github：https://github.com/yokeyang/xdfzljh</p>
              </div>
              <div className = {"exp_left "+this.state.classNames} ref = 'exp_left1'>
                <h1>一些小应用</h1>
                <h2>2016.11-</h2>
                <p>基于react的扫雷，实现基本功能；github：https://github.com/yokeyang/mines</p>
                <p>使用python上手操作爬取网站图片；github：https://github.com/yokeyang/scrapyStreetWill</p>
              </div>
            </div>
          </div>
          <div className = "expectation" id = "expect">
            <h1 className = "title">未来展望</h1>
            <div className = "expect_contain " ref = 'expect_contain'>
              <p>作为一名学生，每天保持学习的欲望</p>
              <p>作为一名前端，每天保持学习的欲望</p>
              <p>在巩固自己前端的基础上</p>
              <p>积极的接触新事物</p>
              <p>在积极接触新事物的基础上</p>
              <p>完成对经典算法和编程语言的精通</p>
              <p>时刻提醒自己</p>
              <p>作为一名全栈工程师的目标</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
