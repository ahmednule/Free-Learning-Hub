import Snippet from '../../../Components/General/Snippet';

const Tutorial = () => {
  const codeString1 = `# Integer
integer_var = 10
print(type(integer_var))  # Output: <class 'int'>

# Float
float_var = 10.5
print(type(float_var))  # Output: <class 'float'>

# String
string_var = "Hello, World!"
print(type(string_var))  # Output: <class 'str'>

# Boolean
boolean_var = True
print(type(boolean_var))  # Output: <class 'bool'>

# List
list_var = [1, 2, 3, 4, 5]
print(type(list_var))  # Output: <class 'list'>

# Tuple
tuple_var = (1, 2, 3, 4, 5)
print(type(tuple_var))  # Output: <class 'tuple'>

# Dictionary
dict_var = {"name": "John", "age": 30}
print(type(dict_var))  # Output: <class 'dict'>

# Set
set_var = {1, 2, 3, 4, 5}
print(type(set_var))  # Output: <class 'set'>`;

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-2xl underline underline-offset-[16px] pb-10'>Python Data Types</h1>

      <article className='mt-6 font-md flex flex-col gap-8 mb-20'>
        <p>In Python, data types are used to define the type of a value. Here are the most commonly used data types in Python:</p>

        <h4 className='text-xl font-semibold'>Basic Data Types</h4>

        <h5 className='text-lg font-semibold'>1. Integer</h5>
        <p>An integer is a whole number, positive or negative, without decimals. It is used when you need to perform mathematical operations where decimals are not required.</p>
        <p>Examples:</p>
        <Snippet codeString={`x = 5
print(type(x))  # <class 'int'>`} lang={'python'} title={'Python Code'} />

        <h5 className='text-lg font-semibold'>2. Float</h5>
        <p>A float is a number, positive or negative, containing one or more decimals. It is used for precise calculations, such as financial or scientific computations.</p>
        <p>Examples:</p>
        <Snippet codeString={`y = 5.75
print(type(y))  # <class 'float'>`} lang={'python'} title={'Python Code'} />

        <h5 className='text-lg font-semibold'>3. String</h5>
        <p>A string is a sequence of characters enclosed in single, double, or triple quotes. Strings are used to store text data.</p>
        <p>Examples:</p>
        <Snippet codeString={`z = "Hello, World!"
print(type(z))  # <class 'str'>`} lang={'python'} title={'Python Code'} />

        <h5 className='text-lg font-semibold'>4. Boolean</h5>
        <p>A boolean represents one of two values: True or False. Booleans are commonly used in conditional statements to control the flow of a program.</p>
        <p>Examples:</p>
        <Snippet codeString={`a = True
print(type(a))  # <class 'bool'>`} lang={'python'} title={'Python Code'} />

        <h4 className='text-xl font-semibold'>Composite Data Types</h4>

        <h5 className='text-lg font-semibold'>5. List</h5>
        <p>A list is an ordered collection of items that is changeable and allows duplicate members. Lists are defined by square brackets.</p>
        <p>Examples:</p>
        <Snippet codeString={`my_list = [1, 2, 3, 4, 5]
print(type(my_list))  # <class 'list'>`} lang={'python'} title={'Python Code'} />

        <h5 className='text-lg font-semibold'>6. Tuple</h5>
        <p>A tuple is an ordered collection of items that is unchangeable and allows duplicate members. Tuples are defined by parentheses.</p>
        <p>Examples:</p>
        <Snippet codeString={`my_tuple = (1, 2, 3, 4, 5)
print(type(my_tuple))  # <class 'tuple'>`} lang={'python'} title={'Python Code'} />

        <h5 className='text-lg font-semibold'>7. Dictionary</h5>
        <p>A dictionary is an unordered collection of key-value pairs. Dictionaries are defined by curly braces with keys and values separated by a colon.</p>
        <p>Examples:</p>
        <Snippet codeString={`my_dict = {"name": "John", "age": 30}
print(type(my_dict))  # <class 'dict'>`} lang={'python'} title={'Python Code'} />

        <h5 className='text-lg font-semibold'>8. Set</h5>
        <p>A set is an unordered collection of unique items. Sets are defined by curly braces, similar to dictionaries but without key-value pairs.</p>
        <p>Examples:</p>
        <Snippet codeString={`my_set = {1, 2, 3, 4, 5}
print(type(my_set))  # <class 'set'>`} lang={'python'} title={'Python Code'} />

        <h4 className='text-xl font-semibold'>Example Code</h4>
        <Snippet codeString={codeString1} lang={'python'} title={'Python Code'} />

        <p>In the example above, we create variables for each data type and use the <span className='code'>type()</span> function to display their types.</p>

        <h4 className='text-xl font-semibold'>Best Practices for Using Data Types</h4>

        <h5 className='text-lg font-semibold'>Understand the Use Cases</h5>
        <p>Choose the appropriate data type based on the requirements of your program. For example, use a list when you need an ordered collection that can change, and a tuple when the collection should remain constant.</p>

        <h5 className='text-lg font-semibold'>Leverage Built-in Functions</h5>
        <p>Utilize Python&apos;s built-in functions to manipulate data types effectively. For instance, use <span className='code'>len()</span> to get the length of a list or string, and <span className='code'>str()</span> to convert an integer to a string.</p>

        <h5 className='text-lg font-semibold'>Keep Data Types Consistent</h5>
        <p>Maintain consistency in data types within your collections. For example, if you have a list of numbers, avoid mixing integers with strings.</p>

        <h4 className='text-xl font-semibold'>Conclusion</h4>
        <p>Understanding and using the correct data types is fundamental to writing efficient and effective Python code. By mastering data types, you can better manage and manipulate data within your programs.</p>
      </article>
    </div>
  );
}

export default Tutorial;
