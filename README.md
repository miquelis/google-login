# Google Login Example

## Configure seu painel no Google Cloud Platform

1. Crie o seu projeto na [GCP](https://console.cloud.google.com)
2. Entre no [APIs e Serviços](https://console.cloud.google.com/apis/dashboard)
3. Clique em Tela de permissão OAuth
   1. Tela de permissão OAuth
      1. User Type: Externo
      2. Clique em criar
      3. Nome do App: Pode adicionar qualquer nome
      4. E-mail para suporte do usuário: Seu email
      5. Página inicial do aplicativo: https://miquelis.github.io/google-login/
      6. Link da Política de Privacidade do Aplicativo:https://miquelis.github.io/google-login/politicas
      7. Link dos Termos de Serviço do aplicativo: https://miquelis.github.io/google-login/termos
      8. Domínio autorizado: miquelis.github.io
      9. Endereço de e-mail: seu email
   2. Escopos
      1. Clique em adicionar ou remover escopos e escolha: `.../auth/userinfo.email`, `.../auth/userinfo.profile` e depois clique em atualizar.
      2. Clique em salvar e continuar
      3. Usuários de teste
      4. Clique em ADD users e adicione os usuários de teste
      5. Clique em salvar e continuar
      6. Resumo
      7. Revise as informações
4. Clique em credenciais e depois em criar credenciais
   1. Escolha ID do client OAuth
   2. Tipo de aplicativo: Aplicativo da Web
   3. Nome: Pode adicionar qualquer nome
   4. Origens JavaScript autorizadas: https://miquelis.github.io
   5. Salve
   6. Irá mostrar na tela o ID do Cliete, Chave secreta do cliente. Copie o ID do Cliente.

---

## Demo

Teste o seu app aqui: [https://miquelis.github.io/google-login/](https://miquelis.github.io/google-login/)

1. Uma caixa de diálogo irá aparece para você com a seguinte informação: **Cole a sua Cliente ID**. Caso não apareça, recarregue a página.
2. Adicione o Client ID que foi gerado na área de credenciais da Google Cloud Platform.
3. Clique no botão de **Fazer login com o Google** e faça login com o email de teste que você cadastrou.
4. Ira mostrar na tela as informação que são recebidas no Google. Você pode verificar todas as informações recebida inspecionando a página.

## Referências

- [Como criar e gerenciar projetos](https://cloud.google.com/resource-manager/docs/creating-managing-projects) na GCP
- [Google Developers](https://developers.google.com/identity/gsi/web/guides/overview)
- [Fazer login com a referência da API JavaScript do Google](https://developers.google.com/identity/gsi/web/reference/js-reference)
- [Criando Google login com HTML e JS](https://www.youtube.com/watch?v=92RkvBuIcts&t=1079s&ab_channel=Rocketseat)
