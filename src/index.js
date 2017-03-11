import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import './css/style.css'
class App extends Component{
    render(){
        return(
            <div>hello world</div>
        )
    }
}

ReactDOM.render(<Root/>,document.getElementById('root'))