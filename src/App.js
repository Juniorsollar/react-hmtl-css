import "./App.css";
import Header from "./components/header.js";
import Section from "./components/section.js";
import ListItem from "./components/listItem.js";

const gamesSPListData = [
  {
    url: "https://www.twitch.tv/directory/category/red-dead-redemption-2",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-144x192.jpg",
    alt: "Imagem do jogo Red Dead Redemption 2",
  },
  {
    url: "https://www.twitch.tv/directory/category/god-of-war-ragnarok",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-144x192.jpg",
    alt: "Imagem do jogo God of War Ragnarok",
  },
  {
    url: "https://www.twitch.tv/directory/category/the-last-of-us-part-i",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/294724507_IGDB-144x192.jpg",
    alt: "Imagem do jogo The Last of Us Part 1",
  },
  {
    url: "https://www.twitch.tv/directory/category/batman-arkham-knight",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/459676_IGDB-144x192.jpg",
    alt: "Imagem do jogo Batman Arkham Knight",
  },
  {
    url: "https://www.twitch.tv/directory/category/grand-theft-auto-v",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
    alt: "Imagem do jogo Grand Theft Auto V",
  },
];

const gamesMPListData = [
  {
    url: "https://www.twitch.tv/directory/category/tom-clancys-rainbow-six-siege",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/460630_IGDB-144x192.jpg",
    alt: "Imagem do jogo Rainbow Six Siege",
  },
  {
    url: "https://www.twitch.tv/directory/category/call-of-duty-warzone",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512710-144x192.jpg",
    alt: "Imagem do jogo Call of Duty",
  },
  {
    url: "https://www.twitch.tv/directory/category/battlefield-4",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/66402_IGDB-144x192.jpg",
    alt: "Imagem do jogo Battlefield 4",
  },
  {
    url: "https://www.twitch.tv/directory/category/ea-sports-fc-24",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-144x192.jpg",
    alt: "Imagem do jogo EA FC 24",
  },
  {
    url: "https://www.twitch.tv/directory/category/counter-strike",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399-144x192.jpg",
    alt: "Imagem do jogo Counter-Strike",
  },
];

const channelList = [
  {
    url: "https://www.twitch.tv/gaules",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/ea0fe422-84bd-4aee-9d10-fd4b0b3a7054-profile_image-70x70.png",
    alt: "Imagem do streamer Gaulês",
  },
  {
    url: "https://www.twitch.tv/loud_coringa",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/c07acddc-1e1b-479f-97c4-09636f80e857-profile_image-70x70.png",
    alt: "Imagem do streamer Loud Coringa",
  },
  {
    url: "https://www.twitch.tv/zigueira",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/3100c193-a79a-4143-a9bb-7bcd10af9dbd-profile_image-70x70.png",
    alt: "Imagem do Streamer ziGueira",
  },
];

const socialListData = [
  {
    url: "https://www.twitch.tv/sollarjr",
    imageUrl:
      "/assets/twitch.svg",
    alt: "Logo da Twitch",
  },
  {
    url: "https://www.instagram.com/alessandrosollar/",
    imageUrl:
      "/assets/instagram.svg",
    alt: "Logo do Instagram",
  },
  {
    url: "https://x.com/SollarJr",
    imageUrl:
      "/assets/twitter.svg",
    alt: "Logo do Twitter",
  },
  {
    url: "https://www.youtube.com/@AlessandroSollarJr",
    imageUrl:
      "/assets/youtube.svg",
    alt: "Logo do Youtube",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos de campanha favoritos de todos os tempos!"
          subtitle="Os games de história que eu mais curti jogar!"
          className="games-list"
        >
          {gamesSPListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Meus jogos de multijogador favoritos de todos os tempos!"
          subtitle="Os games multiplayer que eu mais curti jogar"
          className="games-list"
        >
          {gamesMPListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Meus streamers favoritos!"
          subtitle="Os streamers que eu mais assisto"
          className="channel-list"
        >
          {channelList.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes sociais!"
          subtitle="Conecte-se comigo agora mesmo!"
          className="social-list"
        >
          {
            socialListData.map(function(item) {
              return (
                <ListItem
                  url = {item.url}
                  imageUrl = {item.imageUrl}
                  alt = {item.alt}
                />
              )
            })
          }
        </Section>
      </main>
    </div>
  );
}

export default App;