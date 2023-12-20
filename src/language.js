export const files = {
  'javascript': {
    name: 'main.js',
    language: 'js',
    defaultvalue: "console.log(' World!');",
    defaultOutput:"Hello, World!",

  },
  'python': {
    name: 'main.py',
    language: 'py',
    value: "print('Hello, World!')",
    defaultOutput:"Hello, World!",

  },
  'c++': {
    name: 'main.cpp',
    language: 'cpp',
    value: "#include <iostream>\n\nint main() {\n    std::cout << 'Hello, World!' << std::endl;\n    return 0;\n}",
    defaultOutput:"Hello, World!",

  },
  'java': {
    name: 'Main.java',
    language: 'java',
    value: "public class Main {\n    public static void main(String[] args) {\n        System.out.println('Hello, World!');\n    }\n}",
    defaultOutput:"Hello, World!",

  },
  'go': {
    name: 'main.go',
    language: 'go',
    value: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println('Hello, World!')\n}",
    defaultOutput:"Hello, World!",

  },
  'php': {
    name: 'main.php',
    language: 'php',
    value: "<?php\n\necho 'Hello, World!';\n?>",
    defaultOutput:"Hello, World!",

  },
  'ruby': {
    name: 'main.rb',
    language: 'ruby',
    value: "puts 'Hello, World!'",
    defaultOutput:"Hello, World!",

  },
  'rust': {
    name: 'main.rs',
    language: 'rust',
    value: "fn main() {\n    println!('Hello, World!');\n}",
    defaultOutput:"Hello, World!",

  },
  'r': {
    name: 'main.r',
    language: 'r',
    value: "cat('Hello, World!')",
    defaultOutput:"Hello, World!",

  },
  'swift': {
    name: 'main.swift',
    language: 'swift',
    value: "print('Hello, World!')",
    defaultOutput:"Hello, World!",
  },
};