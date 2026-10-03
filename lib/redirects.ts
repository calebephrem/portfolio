import staticData from "./staticdata";

const redirects: { sources: string[]; destination: string }[] = [
  {
    sources: ["/discord", "/dc", "/chat"],
    destination: staticData.links.discord,
  },
  {
    sources: ["/twitter", "/x"],
    destination: staticData.links.twitter,
  },
  {
    sources: ["/reddit"],
    destination: staticData.links.reddit,
  },
  {
    sources: ["/github", "/gh"],
    destination: staticData.links.github,
  },

  {
    sources: ["/p"],
    destination: "/posts",
  },
  {
    sources: ["/p/:slug"],
    destination: `/posts/:slug*`,
  },

  {
    sources: ["/repos", "/repositories"],
    destination: `${staticData.links.github}/repositories`,
  },
  {
    sources: ["/repo/:repo", "/r/:repo"],
    destination: `${staticData.links.github}/:repo*`,
  },
];

export default redirects;
