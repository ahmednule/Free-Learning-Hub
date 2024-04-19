export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3"
}

export const CODE_SNIPPETS = {
  javascript: `
// JavaScript snippet
function greet() {
  console.log('Hello, world!');
}

greet(); // Call the greet function
    `,
  typescript: `
// TypeScript snippet
function greet(): void {
  console.log('Hello, world!');
}

greet(); // Call the greet function
    `,
  python: `
# Python snippet
def greet():
  print("Hello, world!")

greet() # Call the greet function
    `,
  java: `
// Java snippet
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}

// Call the Main class
Main.main(null);
    `,
  csharp: `
// C# snippet
using System;

class Program
{
  static void Main()
  {
    Console.WriteLine("Hello, world!");
  }
}

// Call the Main method
Program.Main();
    `,
  php: `
// PHP snippet
<?php
function greet() {
  echo "Hello, world!";
}

greet(); // Call the greet function
?>
    `
};
