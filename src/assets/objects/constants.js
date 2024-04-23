export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3"
}

export const CODE_SNIPPETS = {
  javascript: 
`// JavaScript snippet
function greet() {

  console.log('Hello, world!');
}

greet();
`,
  typescript: 
`// TypeScript snippet
function greet(): void {

  console.log('Hello, world!');
}

greet();
`,
  python: 
`# Python snippet
def greet():
  print("Hello, world!")

greet()
`,
  java: 
`// Java snippet
public class Main {
  public static void main(String[] args) {

    System.out.println("Hello, world!");
  }
}
`,
  csharp: 
`// C# snippet
using System;

class Program
{

  static void Main()
  {
    Console.WriteLine("Hello, world!");
  }
}
`,
  php: 
`<?php
// PHP snippet

function greet() {
  echo "Hello, world!";
}

greet();
?>
`
};
