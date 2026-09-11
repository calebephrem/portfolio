import staticData from "./staticdata";

const redirects: { sources: string[]; destination: string }[] = [
  {
    sources: ["/discord", "/dc", "/chat"],
    destination: staticData.external.discord,
  },
  {
    sources: ["/twitter", "/x"],
    destination: staticData.external.twitter,
  },
  {
    sources: ["/reddit"],
    destination: staticData.external.reddit,
  },
  {
    sources: ["/github", "/gh"],
    destination: staticData.external.github,
  },

  {
    sources: ["/repos", "/repositories"],
    destination: `${staticData.external.github}/repositories`,
  },
  {
    sources: ["/repo/:repo", "/r/:repo"],
    destination: `${staticData.external.github}/:repo*`,
  },
];

export default redirects;
