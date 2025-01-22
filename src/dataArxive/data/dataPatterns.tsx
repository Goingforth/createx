type TypeNamePattern = "name" | "phone" | "email" | "textarea";

type TypePattern = {
  name: TypeNamePattern;
  pattern: RegExp;
};

const patterns: TypePattern[] = [
  { name: "name", pattern: /^[a-zA-Zа-яА-я]+ [a-zA-Zа-яА-Я]+$/ },
  { name: "phone", pattern: /^\+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/ },
  {
    name: "email",
    pattern:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  { name: "textarea", pattern: /.+/ },
];

export const retPattern = (name: TypeNamePattern) => {
  return patterns.find((item) => item.name === name)?.pattern;
};
