export function ellipsify({
  text,
  length,
}: {
  text: string;
  length: number;
}): string {
  if (text.length <= length) {
    return text;
  } else {
    return text.slice(0, length) + '...';
  }
}

export function mailToMe(subj: string, msg: string) {
  window.location.href = `mailto:quantumpandaprog@gmail.com?subject=${encodeURIComponent(
    subj
  )}&body=${encodeURIComponent(msg)}`;
}
