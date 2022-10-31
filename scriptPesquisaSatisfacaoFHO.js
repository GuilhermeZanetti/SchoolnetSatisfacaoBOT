



function ProximaTela () {
	const Interval = setInterval(()=>{
		$("#btn-next")[0].click();
		
		let modalMaisQuestoes = document.querySelectorAll("div.swal-overlay--show-modal");
		let btnFinish = $("#btn-finish :visible");
		
		if(modalMaisQuestoes.length >= 1){
			clearInterval(Interval);
			//fecha modal de mais questoes
			$("button.swal-button--confirm")[0].click();
			console.log('passei aqui!!!');
		}
		
		if(btnFinish.length >= 1){
			clearInterval(Interval);
			$("#btn-finish")[0].click();
		}
		
	},150);
}

function AssinarTodosInputsSegundaTela(label="Sim"){
	let inputs = $(`[value*='${label}']`);

	for (let index = 0; index < inputs.length; index++) {
		 inputs[index].checked = true;
	}
}

function AssinarTodosInputs(label="Concordo"){
	let inputs = $(`[value*='${label}']`);

	for (let index = 0; index < inputs.length; index++) {
		 inputs[index].checked = true;
	}
	
	ProximaTela();
	
	try{
		$("button.swal-button--confirm")[0].click();	
	}catch{}
	
	AssinarTodosInputsSegundaTela();
	
	ProximaTela();
}

AssinarTodosInputs();