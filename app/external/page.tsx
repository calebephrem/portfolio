import { redirect } from "next/navigation";

export default function External() {
  return redirect("/posts");
}
