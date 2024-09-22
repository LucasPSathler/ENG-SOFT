🌟 Funcionalidades

Projeto criado para que o usuário possa realizar o controle do tempo de estudo utilizando a técnica de Pomodoro, 
visando melhorar sua produtividade e ajudando a manter o foco.


🚀 Como Instalar Localmente

- Abra o navegador Google Chrome. 
- Acesse a opção "Extensões"
- Ative o modo "Modo do desenvolvedor"
- Selecione a opção "Carregar sem compactação" 
- Selecione a pasta do arquivo desejado.

🎯 Como Usar

- Clique no ícone do Pomodoro Timer na barra de ferramentas do Chrome.
- Pressione o botão Iniciar para iniciar uma sessão de 25 minutos.
- Pressione Parar para encerrar a sessão a qualquer momento.
- Conclua o ciclo e faça uma pequena pausa antes de iniciar outro Pomodoro.

+----------------+
|    Pomodoro    |
+----------------+
| - duração: int |
| - pausaCurta: int |
| - pausaLonga: int |
| - contagem: int |
+----------------+
         ^
         |
         |
+-----------------------+
|        Tarefa         |
+-----------------------+
| - nome: string        |
| - descricao: string   |
| - completada: boolean |
+-----------------------+

+-----------------------+
|        Timer          |
+-----------------------+
| - tempoRestante: int  |
| - status: string      |
+------------------------+

+------------------------------+
|           Sessão             |
+-----------------------------+
| - pomodoros: List<Pomodoro>  |
| - tarefas: List<Tarefa>      |
| - tempoTotal: int            |
+------------------------------+
