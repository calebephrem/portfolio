// to import markdown files as string in tsx files (`import content from "./content.md"`)
declare module "*.md" {
  const content: string;
  export default content;
}
