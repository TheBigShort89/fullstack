import React, {Component} from 'react';



class Header extends Component {
	 constructor(props){
	 	super();
	 	this.state = {
	 		silencio: false,
	 		ruido: true
	 	}
	 }


enSilencio(){
	this.props.silencio(this.state.silencio)
}

enRuido(){
	this.props.ruido(this.state.ruido)
}

	render(){

	
		return <header className="header">
		<nav>
			<ul className="navBarContainer">
			<li className="navBarItem">
				<a href="#perfil">Perfil</a>
			</li>
			<li className="navBarItem active">
				<a href="#home">Proteco Store</a>
			</li>
			<li className="navBarItem">
		<button onClick={this.enSilencio.bind(this)} className="boton">Ocultar menú</button>
        <button onClick={this.enRuido.bind(this)} className="boton">Mostrar menú</button>
			</li>
			</ul>
		</nav>		
	</header>;
	}
}

export default Header;