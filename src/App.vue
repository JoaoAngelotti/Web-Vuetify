<template>
  
  <v-app id="inspire">
    <v-system-bar
      dark
      color="primary"
      app
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>
    <!-- 
    <v-navigation-drawer
      v-model="drawer"
      app
    >
       -->
       
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      v-model="drawer"
      app
    >
    
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>João Victor Angelotti</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <p>
          Meu nome é João Victor, tenho 20 anos de idade. Nasci na cidade de
          Sorocaba do estado de São Paulo.
        </p>

        <p>
          Atualmente, estou cursando o curso de Engenharia de Computação na
          Facens e estou no 6° semestre. Eu escolhi este curso pelo fato de
          sempre gostar da área de tecnologia, a qual foi responsável por me
          despertar muitos interesses na minha adolescência.
        </p>
        <p>
          Gosto da área de desenvolvimento e tenho interesse em aprender cada
          vez mais. Tenho conhecimento com lógica de programação e algumas
          linguagens de programação, tais como Java, C, C#, HTML e CSS.
        </p>
        <p>
          Tudo isso me ajudou a conseguir o meu primeiro estágio, no qual eu
          trabalhei como suporte TI em uma escola. Essa experiência me trouxe
          muito conhecimento para carreira profissional. Depois de alguns meses,
          consegui estágio na melhor empresa de tecnologia de Sorocaba, o FIT.
        </p>
        <p>
          Um hobbie que me ajudou e continua ajudando é o teatro, o qual me
          proporcionou uma melhor comunicação no meio social. Dessa forma, me
          ajudando a manter e criar relações socias com as pessoas tanto na vida
          pessoal quanto na vida profissional.
        </p>
        <p>
          Portanto, as minhas experiências pessoais e profissionais me
          proporcionaram a desenvolver algumas habilidades, as quias são:
        </p>

        <h3>Habilidades</h3>
        <ul>
          <li>Suporte TI - Helpdesk</li>
          <li>Conhecimento com o pacote Office (intermediário)</li>
          <li>
            Linguagem C (intermediário), C# (básico), Java (básico), HTML e CSS
            (intermediário)
          </li>
          <li>Comunicativo</li>
          <li>Comprometido</li>
          <li>Facilidade em aprender</li>
          <li>Trabalho em equipe</li>
        </ul>
    </v-main>
    <v-footer
    dark
    padless
    app
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Me siga nas redes sociais!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

    </v-card>
  </v-footer>

  <v-bottom-navigation
    :value="value"
    color="primary"
    horizontal
    app
  >
    <v-btn>
      <span>Recentes</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favoritos</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Localização</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>

  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null, 
          items: [
          { title: 'Início', icon: 'mdi-view-dashboard' },
          { title: 'Sobre', icon: 'mdi-forum' },
        ],
          icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }),
  }
</script>

