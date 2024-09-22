class Pomodoro {
    constructor(duracao = 25, pausaCurta = 5, pausaLonga = 15) {
        this.duracao = duracao; // duração do Pomodoro em minutos
        this.pausaCurta = pausaCurta; // pausa curta em minutos
        this.pausaLonga = pausaLonga; // pausa longa em minutos
        this.contagem = 0; // número de Pomodoros completados
    }

    incrementarContagem() {
        this.contagem++;
    }
}

class Timer {
    constructor() {
        this.tempoRestante = 0; // tempo restante em segundos
        this.status = "parado"; // status do timer
        this.interval = null; // referência ao setInterval
    }

    iniciar(tempo) {
        this.tempoRestante = tempo * 60; // convertendo para segundos
        this.status = "em andamento";
        this.contar();
    }

    contar() {
        this.interval = setInterval(() => {
            if (this.tempoRestante > 0) {
                this.tempoRestante--;
            } else {
                clearInterval(this.interval);
                this.status = "parado";
                alert("Tempo esgotado!");
            }
        }, 1000);
    }

    pausar() {
        clearInterval(this.interval);
        this.status = "pausado";
    }

    continuar() {
        if (this.status === "pausado") {
            this.contar();
        }
    }
}

class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.completada = false;
    }

    marcarComoCompletada() {
        this.completada = true;
    }
}

class Sessao {
    constructor() {
        this.pomodoros = [];
        this.tarefas = [];
        this.tempoTotal = 0;
    }

    adicionarPomodoro(pomodoro) {
        this.pomodoros.push(pomodoro);
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    calcularTempoTotal() {
        this.tempoTotal = this.pomodoros.length * 25; // exemplo simples
    }
}

// Exemplo de uso
const pomodoro = new Pomodoro();
const timer = new Timer();
const sessao = new Sessao();

sessao.adicionarTarefa(new Tarefa("Estudar JavaScript", "Revisar conceitos de programação"));
sessao.adicionarPomodoro(pomodoro);

console.log(sessao.tarefas);
timer.iniciar(pomodoro.duracao);







