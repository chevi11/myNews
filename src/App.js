import logo from './logo.svg';
import './App.css';
import Configurator from './components/configurator/configurator';
import Top_frame from './components/top_frame/top_frame';
import Sidebar_left from './components/sidebar_left/sidebar_left';
import Menu from './components/menu/menu';
import Stage from './components/stage/stage';
import { connect } from 'react-redux';

function App(props) {
  const { flagCon } = props

  return (
    <div id="body" className="App">

      <Configurator></Configurator>
      <Top_frame></Top_frame>
      <Sidebar_left></Sidebar_left>
      <div id="wrap_center" className={flagCon ? "center_width_on_open_con row" : "center_width_on_close_con row"} >
        <>
          <Menu></Menu>
          <Stage edit={true}></Stage></>
        <div></div>
      </div>
    </div>
  )
}


export default connect(
  (state) => {
    return {
      flagCon: state.page.isOpenConfigurator,
    }
  }
)(App);