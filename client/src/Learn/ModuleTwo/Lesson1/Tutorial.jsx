import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `# This is a comment
print("Hello, World!")  # This will print Hello, World! to the console`;

  const codeString2 = `x = 5           # Variable assignment
y = "Hello"      # String assignment
z = 3.14         # Floating-point number assignment`;

  const codeString3 = `if x > 2:
    print("x is greater than 2")
else:
    print("x is not greater than 2")`;

  const codeString4 = `for i in range(5):
    print(i)`;

  const codeString5 = `def greet(name):
    return "Hello, " + name

print(greet("Alice"))`;

  const codeString6 = `# Indentation is important in Python
def my_function():
    a = 10
    if a > 5:
        print("a is greater than 5")
    else:
        print("a is less than or equal to 5")`;

  const codeString7 = `# Basic arithmetic operations
a = 10
b = 5

print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division`;

  const codeString8 = `# List operations
my_list = [1, 2, 3, 4, 5]
print(my_list[0])  # Accessing first element
my_list.append(6)  # Adding an element to the list
print(my_list)`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Python Basic Syntax</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>Python is a high-level, interpreted programming language known for its readability and simplicity. Here are some of the basic syntax elements you need to get started with Python.</p>

        <h4 className='text-xl font-semibold'>Comments</h4>
        <p>Comments in Python are marked by the <span className='code'>#</span> symbol. They are used to explain code and are ignored by the Python interpreter.</p>
        <Snippet codeString={codeString1} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>Variables and Data Types</h4>
        <p>Variables are used to store data in Python. You do not need to declare the data type of a variable; Python automatically assigns the type based on the value you assign to it.</p>
        <Snippet codeString={codeString2} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>Conditional Statements</h4>
        <p>Conditional statements allow you to execute code based on certain conditions. The <span className='code'>if</span> statement is used to test a condition, and <span className='code'>else</span> provides an alternative if the condition is false.</p>
        <Snippet codeString={codeString3} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>Loops</h4>
        <p>Loops are used to repeat a block of code multiple times. The <span className='code'>for</span> loop iterates over a sequence (such as a list or range).</p>
        <Snippet codeString={codeString4} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>Functions</h4>
        <p>Functions are blocks of reusable code that perform a specific task. They are defined using the <span className='code'>def</span> keyword.</p>
        <Snippet codeString={codeString5} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>Indentation</h4>
        <p>Indentation is crucial in Python and is used to define the scope of loops, functions, and conditional statements. Improper indentation can lead to errors.</p>
        <Snippet codeString={codeString6} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>Basic Operations</h4>
        <p>Python supports various basic operations like arithmetic calculations, which can be performed directly using operators.</p>
        <Snippet codeString={codeString7} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>List Operations</h4>
        <p>Lists are a fundamental data structure in Python, allowing you to store and manipulate sequences of items.</p>
        <Snippet codeString={codeString8} lang={'python'} title={'Python'} />

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>These basic syntax elements form the foundation of Python programming. By mastering them, you can start building more complex programs and delve deeper into the language&apos;s capabilities.</p>
      </article>
    </div>
  );
}

export default Tutorial;
