const TASKS = {
    task1: {
        title: "Task 1: Python Basics & Calculator",
        description: "Explore Python website, interpreter, and use Python as a calculator. Calculate compound interest.",
        questions: [
            {
                title: "Python Website & Interpreter",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Python.org</strong> is the official Python website where you can download Python, read documentation, and find tutorials.</p>
                <p><strong>Python Interpreter</strong> is an interactive shell where you can type Python commands and see results immediately.</p>
                <ul>
                    <li>Open terminal/command prompt and type <code>python</code> to start the interpreter</li>
                    <li>Type <code>help()</code> to start the online help utility</li>
                    <li>Type <code>quit()</code> to exit help or the interpreter</li>
                </ul>
                <p>The code below demonstrates using Python as a simple calculator:</p>`,
                code: `# Python as a Calculator
# Basic Arithmetic Operations

a = 15
b = 4

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Modulus:", a % b)
print("Exponent:", a ** b)

# You can also try:
# help()  - starts help utility
# quit()  - exits interpreter`,
                hasVisualization: false
            },
            {
                title: "Compound Interest Calculator",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Compound Interest</strong> is calculated using the formula:</p>
                <p style="text-align:center;font-size:1.1rem;margin:12px 0;"><code>A = P × (1 + r/n)^(n×t)</code></p>
                <ul>
                    <li><code>P</code> = Principal amount (initial investment)</li>
                    <li><code>r</code> = Annual interest rate (as decimal)</li>
                    <li><code>n</code> = Number of times interest is compounded per year</li>
                    <li><code>t</code> = Time in years</li>
                    <li><code>A</code> = Final amount</li>
                    <li>Compound Interest = A - P</li>
                </ul>
                <p>The program takes user input for principal, rate, and time, then calculates the compound interest.</p>`,
                code: `# Compound Interest Calculator

def compound_interest(principal, rate, time, n=1):
    """
    Calculate compound interest.
    principal: initial amount
    rate: annual interest rate (in percentage)
    time: time in years
    n: compounding frequency per year (default=1)
    """
    amount = principal * (1 + rate / (100 * n)) ** (n * time)
    ci = amount - principal
    return amount, ci

# Input from user
principal = float(input("Enter Principal Amount: "))
rate = float(input("Enter Annual Interest Rate (%): "))
time = float(input("Enter Time (in years): "))
n = int(input("Enter Compounding Frequency per year: "))

amount, ci = compound_interest(principal, rate, time, n)

print(f"\\nPrincipal: Rs. {principal:.2f}")
print(f"Rate: {rate}%")
print(f"Time: {time} years")
print(f"Compounding: {n} time(s) per year")
print(f"Total Amount: Rs. {amount:.2f}")
print(f"Compound Interest: Rs. {ci:.2f}")`,
                hasVisualization: false
            }
        ]
    },

    task2: {
        title: "Task 2: I/O & Control Flow",
        description: "Read personal details, print triangle pattern, and check character type using if-else-if.",
        questions: [
            {
                title: "Read and Print Person Details",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This program demonstrates basic <strong>input/output</strong> operations in Python:</p>
                <ul>
                    <li><code>input()</code> function reads a line of text from the user</li>
                    <li><code>print()</code> function displays output to the screen</li>
                    <li>f-strings (f"...") allow embedding variables inside strings</li>
                </ul>
                <p>We read name, address, email, and phone number, then display them in a formatted way.</p>`,
                code: `# Read and Print Person Details

name = input("Enter your name: ")
address = input("Enter your address: ")
email = input("Enter your email: ")
phone = input("Enter your phone number: ")

print("\\n===== Personal Details =====")
print(f"Name    : {name}")
print(f"Address : {address}")
print(f"Email   : {email}")
print(f"Phone   : {phone}")
print("============================")`,
                hasVisualization: false
            },
            {
                title: "Print Triangle Pattern",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This program prints a <strong>descending number triangle</strong> pattern:</p>
                <pre>5
4 4
3 3 3
2 2 2 2
1 1 1 1 1</pre>
                <ul>
                    <li>The outer <code>for</code> loop runs from 5 down to 1</li>
                    <li>The inner loop prints each number <code>i</code> exactly <code>6-i</code> times</li>
                    <li><code>end=" "</code> keeps numbers on the same line with a space</li>
                    <li>An empty <code>print()</code> moves to the next line after each row</li>
                </ul>`,
                code: `# Print Triangle Pattern
# 5
# 4 4
# 3 3 3
# 2 2 2 2
# 1 1 1 1 1

n = 5
for i in range(n, 0, -1):
    for j in range(n - i + 1):
        print(i, end=" ")
    print()`,
                hasVisualization: true,
                vizType: "triangle"
            },
            {
                title: "Check Character Type (if-else-if)",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This program uses an <strong>if-else-if ladder</strong> to check what type of character the user entered:</p>
                <ul>
                    <li><code>'0' to '9'</code> → It's a digit</li>
                    <li><code>'a' to 'z'</code> → It's a lowercase letter</li>
                    <li><code>'A' to 'Z'</code> → It's an uppercase letter</li>
                    <li>Otherwise → It's a special character</li>
                </ul>
                <p>We compare using ASCII values. Python allows direct character comparison like <code>'a' <= ch <= 'z'</code>.</p>`,
                code: `# Check Character Type using if-else-if ladder

ch = input("Enter a character: ")

if len(ch) != 1:
    print("Please enter only one character!")
elif '0' <= ch <= '9':
    print(f"'{ch}' is a Digit")
elif 'a' <= ch <= 'z':
    print(f"'{ch}' is a Lowercase Letter")
elif 'A' <= ch <= 'Z':
    print(f"'{ch}' is an Uppercase Letter")
else:
    print(f"'{ch}' is a Special Character")`,
                hasVisualization: false
            }
        ]
    },

    task3: {
        title: "Task 3: Primes & Arrays",
        description: "Print prime numbers using break, convert list/tuple to arrays, find common values.",
        questions: [
            {
                title: "Prime Numbers in Intervals",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>A <strong>prime number</strong> is a number greater than 1 that has no divisors other than 1 and itself.</p>
                <p>The algorithm:</p>
                <ol>
                    <li>For each number in the interval, check if it's prime</li>
                    <li>To check primality, try dividing by all numbers from 2 to √n</li>
                    <li>If any divisor is found, use <code>break</code> to exit the inner loop early (not prime)</li>
                    <li>If no divisor is found after the loop, the number is prime</li>
                </ol>
                <p>Using <code>break</code> makes the program more efficient by stopping early when a factor is found.</p>`,
                code: `# Prime Numbers in an Interval using break

start = int(input("Enter start of interval: "))
end = int(input("Enter end of interval: "))

print(f"\\nPrime numbers between {start} and {end}:")

for num in range(start, end + 1):
    if num < 2:
        continue
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break  # Exit loop early - not prime
    if is_prime:
        print(num, end=" ")

print()`,
                hasVisualization: false
            },
            {
                title: "Convert List and Tuple to Arrays",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>In Python, we can convert between lists, tuples, and arrays:</p>
                <ul>
                    <li><strong>List</strong> → ordered, mutable collection: <code>[1, 2, 3]</code></li>
                    <li><strong>Tuple</strong> → ordered, immutable collection: <code>(1, 2, 3)</code></li>
                    <li><strong>Array (NumPy)</strong> → fixed-type, efficient numerical collection</li>
                </ul>
                <p>Conversions:</p>
                <ul>
                    <li><code>list(tuple)</code> converts tuple to list</li>
                    <li><code>tuple(list)</code> converts list to tuple</li>
                    <li><code>np.array(list)</code> converts list to NumPy array</li>
                </ul>`,
                code: `# Convert List and Tuple to Arrays

# Using Python lists (built-in array-like)
my_list = [1, 2, 3, 4, 5]
my_tuple = (10, 20, 30, 40, 50)

print("Original List:", my_list)
print("Original Tuple:", my_tuple)

# Convert list to tuple
list_to_tuple = tuple(my_list)
print("List to Tuple:", list_to_tuple)

# Convert tuple to list
tuple_to_list = list(my_tuple)
print("Tuple to List:", tuple_to_list)

# Convert to array using list comprehension
array_from_list = [x for x in my_list]
array_from_tuple = [x for x in my_tuple]
print("Array from List:", array_from_list)
print("Array from Tuple:", array_from_tuple)

# If you have numpy installed:
# import numpy as np
# arr = np.array(my_list)
# print("NumPy Array:", arr)`,
                hasVisualization: false
            },
            {
                title: "Common Values Between Two Arrays",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Finding <strong>common values</strong> means finding elements that exist in both arrays.</p>
                <p>Methods to find common values:</p>
                <ul>
                    <li><strong>List comprehension:</strong> <code>[x for x in arr1 if x in arr2]</code></li>
                    <li><strong>Set intersection:</strong> <code>set(arr1) & set(arr2)</code></li>
                    <li><strong>Loop approach:</strong> iterate and check membership</li>
                </ul>
                <p>Using sets is the most efficient approach for large arrays.</p>`,
                code: `# Find Common Values Between Two Arrays

arr1 = [1, 2, 3, 4, 5, 6, 7]
arr2 = [2, 4, 6, 8, 10]

print("Array 1:", arr1)
print("Array 2:", arr2)

# Method 1: Using list comprehension
common = [x for x in arr1 if x in arr2]
print("\\nCommon values (list comprehension):", common)

# Method 2: Using set intersection
common_set = list(set(arr1) & set(arr2))
print("Common values (set intersection):", common_set)

# Method 3: Using a loop
common_loop = []
for item in arr1:
    if item in arr2 and item not in common_loop:
        common_loop.append(item)
print("Common values (loop):", common_loop)`,
                hasVisualization: false
            }
        ]
    },

    task4: {
        title: "Task 4: Functions & Lists",
        description: "Palindrome check, sorted list check, find duplicates, and remove duplicates.",
        questions: [
            {
                title: "Palindrome Checker Function",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>A <strong>palindrome</strong> is a string that reads the same forwards and backwards.</p>
                <p>Examples: "racecar", "madam", "level", "121"</p>
                <p>How to check:</p>
                <ol>
                    <li>Compare the string with its reverse</li>
                    <li>In Python, <code>s[::-1]</code> reverses a string</li>
                    <li>If <code>s == s[::-1]</code>, it's a palindrome</li>
                </ol>
                <p>The function returns <code>True</code> if palindrome, <code>False</code> otherwise.</p>`,
                code: `# Palindrome Checker Function

def is_palindrome(s):
    """Returns True if the string is a palindrome."""
    s = s.lower().replace(" ", "")
    return s == s[::-1]

# Test cases
test_strings = ["racecar", "hello", "madam", "python", "level", "A man a plan a canal Panama"]

for word in test_strings:
    result = is_palindrome(word)
    print(f"'{word}' -> {'Palindrome' if result else 'Not a palindrome'}")

# User input
user_input = input("\\nEnter a string to check: ")
if is_palindrome(user_input):
    print(f"'{user_input}' IS a palindrome!")
else:
    print(f"'{user_input}' is NOT a palindrome.")`,
                hasVisualization: false
            },
            {
                title: "Check if List is Sorted",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This function checks if a list is sorted in <strong>ascending order</strong>.</p>
                <p>Algorithm:</p>
                <ol>
                    <li>Compare each element with the next one</li>
                    <li>If any element is greater than the next, list is not sorted</li>
                    <li>If we go through the entire list without finding such a pair, it's sorted</li>
                </ol>
                <p>Time complexity: O(n) - we only need one pass through the list.</p>`,
                code: `# Check if List is Sorted in Ascending Order

def is_sorted(lst):
    """Returns True if the list is sorted in ascending order."""
    for i in range(len(lst) - 1):
        if lst[i] > lst[i + 1]:
            return False
    return True

# Test cases
test_lists = [
    [1, 2, 3, 4, 5],
    [1, 3, 2, 4, 5],
    [5, 4, 3, 2, 1],
    [1, 1, 2, 3, 3],
    [],
    [42]
]

for lst in test_lists:
    result = is_sorted(lst)
    print(f"{lst} -> {'Sorted' if result else 'Not sorted'}")`,
                hasVisualization: false
            },
            {
                title: "Check for Duplicates in List",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This function checks if a list contains any <strong>duplicate elements</strong>.</p>
                <p>Key requirement: Do NOT modify the original list.</p>
                <p>Methods:</p>
                <ul>
                    <li><strong>Set method:</strong> Compare length of list with length of set (sets remove duplicates)</li>
                    <li><strong>Loop method:</strong> Use a seen set to track encountered elements</li>
                </ul>
                <p>The set method is the simplest: if <code>len(list) != len(set(list))</code>, duplicates exist.</p>`,
                code: `# Check for Duplicates in a List

def has_duplicates(lst):
    """Returns True if the list has duplicate elements.
    Does NOT modify the original list."""
    seen = set()
    for item in lst:
        if item in seen:
            return True
        seen.add(item)
    return False

# Test cases
test_lists = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 2, 5],
    ["apple", "banana", "apple"],
    [],
    [1],
    [1, 1]
]

for lst in test_lists:
    result = has_duplicates(lst)
    print(f"{lst} -> {'Has duplicates' if result else 'No duplicates'}")

# Verify original list is not modified
original = [3, 1, 4, 1, 5, 9]
print(f"\\nOriginal before check: {original}")
has_duplicates(original)
print(f"Original after check:  {original}")`,
                hasVisualization: false
            },
            {
                title: "Remove Duplicates from List",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This function returns a <strong>new list</strong> with only unique elements from the original.</p>
                <p>Note: The order doesn't need to be preserved (as per the hint).</p>
                <p>Simple approach using sets:</p>
                <ol>
                    <li>Convert list to set (automatically removes duplicates)</li>
                    <li>Convert set back to list</li>
                </ol>
                <p>If order matters, use a different approach with a seen set.</p>`,
                code: `# Remove Duplicates from a List

def remove_duplicates(lst):
    """Returns a new list with only unique elements."""
    return list(set(lst))

def remove_duplicates_ordered(lst):
    """Returns a new list with unique elements, preserving order."""
    seen = set()
    result = []
    for item in lst:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Test
original = [1, 2, 3, 2, 4, 3, 5, 1, 6, 5]
print(f"Original list: {original}")
print(f"Unique (unordered): {remove_duplicates(original)}")
print(f"Unique (ordered):   {remove_duplicates_ordered(original)}")

# With strings
words = ["apple", "banana", "apple", "cherry", "banana", "date"]
print(f"\\nOriginal: {words}")
print(f"Unique:   {remove_duplicates_ordered(words)}")`,
                hasVisualization: false
            }
        ]
    },

    task5: {
        title: "Task 5: Strings & Dictionaries",
        description: "Word list operations, dictionary inversion, comma between characters, word removal.",
        questions: [
            {
                title: "Word List with Single Letter Words",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Working with <strong>word lists</strong> in Python:</p>
                <ul>
                    <li>Lists can store strings of any length</li>
                    <li>We can add single-letter words like "I" and "a" to a list</li>
                    <li>The empty string "" is also a valid list element</li>
                </ul>
                <p>Common operations: <code>append()</code>, <code>extend()</code>, <code>insert()</code>, <code>remove()</code></p>`,
                code: `# Word List with Single Letter Words

# Original word list
words = ["hello", "world", "python", "programming", "is", "fun"]
print("Original words:", words)

# Add single letter words
words.extend(["I", "a", ""])
print("After adding single letters:", words)

# Filter out empty strings
filtered = [w for w in words if w]
print("After filtering empty strings:", filtered)

# Sort by length
by_length = sorted(filtered, key=len)
print("Sorted by length:", by_length)

# Find words of specific length
length_1 = [w for w in filtered if len(w) == 1]
length_5 = [w for w in filtered if len(w) == 5]
print(f"\\n1-letter words: {length_1}")
print(f"5-letter words: {length_5}")`,
                hasVisualization: false
            },
            {
                title: "Invert Dictionary",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Dictionary inversion</strong> means swapping keys and values.</p>
                <p>Original: <code>{"a": 1, "b": 2}</code> → Inverted: <code>{1: "a", 2: "b"}</code></p>
                <p>Important considerations:</p>
                <ul>
                    <li>Values must be <strong>hashable</strong> (can be dict keys)</li>
                    <li>If duplicate values exist, only the last one survives</li>
                    <li>Use <code>dict comprehension</code>: <code>{v: k for k, v in d.items()}</code></li>
                </ul>`,
                code: `# Invert Dictionary - Keys become Values and Vice Versa

def invert_dict(d):
    """Inverts a dictionary: keys become values, values become keys."""
    return {v: k for k, v in d.items()}

def invert_dict_safe(d):
    """Inverts dictionary, handling duplicate values by making lists."""
    inverted = {}
    for k, v in d.items():
        if v in inverted:
            if isinstance(inverted[v], list):
                inverted[v].append(k)
            else:
                inverted[v] = [inverted[v], k]
        else:
            inverted[v] = k
    return inverted

# Read dictionary from user
print("Enter key-value pairs (type 'done' to finish):")
my_dict = {}
while True:
    key = input("Key (or 'done'): ")
    if key.lower() == 'done':
        break
    value = input("Value: ")
    my_dict[key] = value

print(f"\\nOriginal Dictionary: {my_dict}")
print(f"Inverted Dictionary: {invert_dict(my_dict)}")

# Example with duplicate values
print("\\n--- Example with duplicate values ---")
example = {"a": 1, "b": 2, "c": 1, "d": 3}
print(f"Original:  {example}")
print(f"Inverted:  {invert_dict_safe(example)}")`,
                hasVisualization: false
            },
            {
                title: "Add Comma Between Characters",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Adding a <strong>comma between each character</strong> of a string:</p>
                <ul>
                    <li>Input: <code>"Apple"</code> → Output: <code>"A,p,p,l,e"</code></li>
                    <li>Method 1: Use <code>",".join(string)</code> - simplest way</li>
                    <li>Method 2: Loop through characters and build result</li>
                </ul>
                <p>The <code>join()</code> method is the most Pythonic approach.</p>`,
                code: `# Add Comma Between Characters

def add_commas(word):
    """Add commas between each character."""
    return ",".join(word)

def add_commas_loop(word):
    """Add commas using a loop."""
    result = ""
    for i, char in enumerate(word):
        if i > 0:
            result += ","
        result += char
    return result

# Test
words = ["Apple", "Python", "Hello", "Programming"]

for word in words:
    print(f"'{word}' -> '{add_commas(word)}'")

# User input
user_word = input("\\nEnter a word: ")
print(f"Result: {add_commas(user_word)}")`,
                hasVisualization: false
            },
            {
                title: "Remove Word from String",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Removing all occurrences of a word from a string:</p>
                <ul>
                    <li>Use <code>str.replace(old, new)</code> to replace the word with empty string</li>
                    <li><code>replace()</code> removes ALL occurrences by default</li>
                    <li>For case-insensitive removal, convert both to lowercase first</li>
                </ul>
                <p>Note: <code>replace()</code> doesn't modify the original string (strings are immutable).</p>`,
                code: `# Remove Given Word from All Places in a String

def remove_word(text, word):
    """Remove all occurrences of a word from the text."""
    return text.replace(word, "")

def remove_word_case_insensitive(text, word):
    """Remove word regardless of case."""
    import re
    pattern = re.compile(re.escape(word), re.IGNORECASE)
    return pattern.sub("", text).strip()

# Test
sentence = "the cat sat on the mat and the cat played"
word_to_remove = "the"

print(f"Original:  '{sentence}'")
print(f"Remove '{word_to_remove}': '{remove_word(sentence, word_to_remove)}'")

# Another example
text = "Python is great and Python is fun"
remove = "Python"
print(f"\\nOriginal:  '{text}'")
print(f"Remove '{remove}': '{remove_word(text, remove)}'")

# User input
user_text = input("\\nEnter a sentence: ")
user_word = input("Enter word to remove: ")
print(f"Result: '{remove_word(user_text, user_word)}'")`,
                hasVisualization: false
            }
        ]
    },

    task6: {
        title: "Task 6: Recursion & Matrices",
        description: "Title case without built-in, recursive binary strings, and matrix printing.",
        questions: [
            {
                title: "Title Case Without Built-in Function",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Title case</strong> means the first letter of every word is uppercase and the rest are lowercase.</p>
                <p>Without using built-in functions like <code>title()</code>:</p>
                <ol>
                    <li>Split the sentence into words</li>
                    <li>For each word, convert first char to uppercase and rest to lowercase</li>
                    <li>Use <code>ord()</code> and <code>chr()</code> for case conversion</li>
                    <li>ASCII: 'a'-'z' = 97-122, 'A'-'Z' = 65-90, difference = 32</li>
                </ol>`,
                code: `# Title Case Without Built-in Function

def to_upper(ch):
    """Convert character to uppercase without built-in function."""
    if 'a' <= ch <= 'z':
        return chr(ord(ch) - 32)
    return ch

def to_lower(ch):
    """Convert character to lowercase without built-in function."""
    if 'A' <= ch <= 'Z':
        return chr(ord(ch) + 32)
    return ch

def title_case(sentence):
    """Convert sentence to title case without built-in functions."""
    result = ""
    new_word = True
    
    for ch in sentence:
        if ch == ' ':
            result += ch
            new_word = True
        elif new_word:
            result += to_upper(ch)
            new_word = False
        else:
            result += to_lower(ch)
    
    return result

# Test
sentences = [
    "hello world",
    "python programming is fun",
    "the quick brown fox",
    "a]simple example"
]

for s in sentences:
    print(f"'{s}' -> '{title_case(s)}'")`,
                hasVisualization: false
            },
            {
                title: "Recursive Binary Strings Generator",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Generate all <strong>binary strings</strong> of n-bit length using recursion.</p>
                <p>For n=2: "00", "01", "10", "11" (4 strings = 2²)</p>
                <p>Recursive approach:</p>
                <ol>
                    <li><strong>Base case:</strong> n=0 → return list with empty string [""]</li>
                    <li><strong>Recursive case:</strong> Generate (n-1)-bit strings, then append '0' and '1' to each</li>
                </ol>
                <p>For n bits, we get 2^n strings. Each recursive call doubles the result.</p>`,
                code: `# Recursive Binary Strings Generator

def generate_binary(n):
    """Generate all binary strings of n-bit length recursively."""
    if n == 0:
        return [""]
    
    # Get all (n-1)-bit strings
    smaller = generate_binary(n - 1)
    
    # For each (n-1)-bit string, add '0' and '1' at the end
    result = []
    for s in smaller:
        result.append(s + "0")
        result.append(s + "1")
    
    return result

# Test
for n in range(1, 5):
    binaries = generate_binary(n)
    print(f"n={n}: {len(binaries)} strings")
    print(f"  {binaries}\\n")`,
                hasVisualization: true,
                vizType: "binary_tree"
            },
            {
                title: "Define and Print a Matrix",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>A <strong>matrix</strong> is a 2D array of numbers arranged in rows and columns.</p>
                <p>In Python, we can represent a matrix as a <strong>list of lists</strong>:</p>
                <ul>
                    <li>Each inner list is a row</li>
                    <li><code>matrix[i][j]</code> accesses element at row i, column j</li>
                </ul>
                <p>To print nicely, we iterate through rows and columns with formatting.</p>`,
                code: `# Define and Print a Matrix

def print_matrix(matrix, name="Matrix"):
    """Pretty print a matrix."""
    print(f"\\n{name}:")
    print("-" * (len(matrix[0]) * 8 + 1))
    for row in matrix:
        print("|", end="")
        for val in row:
            print(f" {val:4d} |", end="")
        print()
        print("-" * (len(row) * 8 + 1))

# Define a 3x3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print_matrix(matrix, "3x3 Matrix")

# Define a 4x4 matrix
matrix4 = [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 100, 110, 120],
    [130, 140, 150, 160]
]

print_matrix(matrix4, "4x4 Matrix")

# Create matrix using nested loops
print("\\nDynamic 3x3 Matrix:")
rows, cols = 3, 3
dynamic = [[i * cols + j + 1 for j in range(cols)] for i in range(rows)]
print_matrix(dynamic, "Dynamic")`,
                hasVisualization: true,
                vizType: "matrix"
            }
        ]
    },

    task7: {
        title: "Task 7: Matrices, Modules & Exceptions",
        description: "Matrix multiplication, module creation with geometry, and exception handling.",
        questions: [
            {
                title: "Matrix Multiplication",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Matrix multiplication</strong> of two square matrices A and B:</p>
                <p>Result[i][j] = Sum of (A[i][k] * B[k][j]) for all k</p>
                <p>For n×n matrices:</p>
                <ol>
                    <li>Create result matrix of size n×n initialized to 0</li>
                    <li>Three nested loops: row of A, column of B, and inner dimension</li>
                    <li>Multiply and accumulate: C[i][j] += A[i][k] * B[k][j]</li>
                </ol>`,
                code: `# Multiplication of Two Square Matrices

def multiply_matrices(A, B):
    """Multiply two square matrices."""
    n = len(A)
    # Initialize result matrix with zeros
    C = [[0 for _ in range(n)] for _ in range(n)]
    
    for i in range(n):
        for j in range(n):
            for k in range(n):
                C[i][j] += A[i][k] * B[k][j]
    
    return C

def print_matrix(matrix, name="Matrix"):
    """Pretty print a matrix."""
    print(f"\\n{name}:")
    for row in matrix:
        print("  |", " ".join(f"{val:4d}" for val in row), "|")

# Define two 3x3 matrices
A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

print_matrix(A, "Matrix A")
print_matrix(B, "Matrix B")

result = multiply_matrices(A, B)
print_matrix(result, "A × B")`,
                hasVisualization: false
            },
            {
                title: "Geometry Module",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>A <strong>module</strong> in Python is a file containing Python code (functions, classes, variables).</p>
                <p>To create a module:</p>
                <ol>
                    <li>Create a .py file with your functions</li>
                    <li>Import it using <code>import module_name</code></li>
                    <li>Access functions with <code>module_name.function()</code></li>
                </ol>
                <p>Below is a geometry module with shapes (circle, rectangle, triangle) and operations (area, perimeter).</p>`,
                code: `# Geometry Module Example
# In real usage, save this as 'geometry.py' and import it

import math

# ---- Circle ----
class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius

# ---- Rectangle ----
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def area(self):
        return self.length * self.width
    
    def perimeter(self):
        return 2 * (self.length + self.width)

# ---- Triangle ----
class Triangle:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c
    
    def area(self):
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))
    
    def perimeter(self):
        return self.a + self.b + self.c

# Using the module
circle = Circle(5)
rect = Rectangle(10, 6)
tri = Triangle(3, 4, 5)

print("=== Geometry Module Demo ===")
print(f"\\nCircle (r=5):")
print(f"  Area:      {circle.area():.2f}")
print(f"  Perimeter: {circle.perimeter():.2f}")

print(f"\\nRectangle (10 x 6):")
print(f"  Area:      {rect.area():.2f}")
print(f"  Perimeter: {rect.perimeter():.2f}")

print(f"\\nTriangle (3, 4, 5):")
print(f"  Area:      {tri.area():.2f}")
print(f"  Perimeter: {tri.perimeter():.2f}")`,
                hasVisualization: false
            },
            {
                title: "Exception Handling",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Exception handling</strong> in Python uses try-except blocks to handle errors gracefully.</p>
                <p>Structure:</p>
                <ul>
                    <li><code>try:</code> - Code that might raise an exception</li>
                    <li><code>except ExceptionType:</code> - Handle specific exception</li>
                    <li><code>else:</code> - Runs if no exception occurred</li>
                    <li><code>finally:</code> - Always runs (cleanup code)</li>
                </ul>
                <p>Common exceptions: <code>ValueError</code>, <code>ZeroDivisionError</code>, <code>TypeError</code>, <code>FileNotFoundError</code>, <code>IndexError</code>, <code>KeyError</code></p>`,
                code: `# Exception Handling - General Purpose Exceptions

def demonstrate_exceptions():
    """Demonstrate various exception types."""
    
    # 1. ZeroDivisionError
    print("--- ZeroDivisionError ---")
    try:
        result = 10 / 0
    except ZeroDivisionError as e:
        print(f"Caught: {e}")
    
    # 2. ValueError
    print("\\n--- ValueError ---")
    try:
        num = int("hello")
    except ValueError as e:
        print(f"Caught: {e}")
    
    # 3. TypeError
    print("\\n--- TypeError ---")
    try:
        result = "hello" + 5
    except TypeError as e:
        print(f"Caught: {e}")
    
    # 4. IndexError
    print("\\n--- IndexError ---")
    try:
        lst = [1, 2, 3]
        print(lst[10])
    except IndexError as e:
        print(f"Caught: {e}")
    
    # 5. KeyError
    print("\\n--- KeyError ---")
    try:
        d = {"a": 1, "b": 2}
        print(d["c"])
    except KeyError as e:
        print(f"Caught: {e}")
    
    # 6. FileNotFoundError
    print("\\n--- FileNotFoundError ---")
    try:
        f = open("nonexistent.txt")
    except FileNotFoundError as e:
        print(f"Caught: {e}")
    
    # 7. Try-Except-Else-Finally
    print("\\n--- Complete Structure ---")
    try:
        num = int(input("Enter a number: "))
        result = 100 / num
    except ValueError:
        print("Invalid input!")
    except ZeroDivisionError:
        print("Cannot divide by zero!")
    else:
        print(f"Result: {result}")
    finally:
        print("This always runs!")

demonstrate_exceptions()`,
                hasVisualization: false
            }
        ]
    },

    task8: {
        title: "Task 8: Canvas Drawing",
        description: "Draw rectangles and points on a canvas using classes.",
        questions: [
            {
                title: "Draw Rectangle on Canvas",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This demonstrates <strong>object-oriented programming</strong> with Canvas and Rectangle classes.</p>
                <ul>
                    <li><code>Point</code> class represents an (x, y) coordinate</li>
                    <li><code>Rectangle</code> class has a corner point, width, and height</li>
                    <li><code>Canvas</code> class manages a grid where we can draw</li>
                    <li><code>draw_rectangle()</code> function draws the rectangle on the canvas</li>
                </ul>
                <p>We use a text-based canvas with ASCII characters for visualization.</p>`,
                code: `# Draw Rectangle on Canvas

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Rectangle:
    def __init__(self, corner, width, height, color='#'):
        self.corner = corner  # Point
        self.width = width
        self.height = height
        self.color = color

class Canvas:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.grid = [[' ' for _ in range(width)] for _ in range(height)]
    
    def set_pixel(self, x, y, char='*'):
        if 0 <= x < self.width and 0 <= y < self.height:
            self.grid[y][x] = char
    
    def display(self):
        print('+' + '-' * self.width + '+')
        for row in self.grid:
            print('|' + ''.join(row) + '|')
        print('+' + '-' * self.width + '+')

def draw_rectangle(canvas, rect):
    """Draw a rectangle on the canvas."""
    x, y = rect.corner.x, rect.corner.y
    for i in range(rect.width):
        canvas.set_pixel(x + i, y, rect.color)
        canvas.set_pixel(x + i, y + rect.height - 1, rect.color)
    for j in range(rect.height):
        canvas.set_pixel(x, y + j, rect.color)
        canvas.set_pixel(x + rect.width - 1, y + j, rect.color)

# Create canvas and rectangle
canvas = Canvas(40, 15)
rect = Rectangle(Point(5, 3), 20, 8, '#')

draw_rectangle(canvas, rect)

print("Canvas with Rectangle:")
canvas.display()`,
                hasVisualization: true,
                vizType: "canvas_rect"
            },
            {
                title: "Draw Point on Canvas",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Drawing a <strong>point</strong> on the canvas is simpler than a rectangle.</p>
                <p>A point is just a single pixel at (x, y) coordinates.</p>
                <p>We can also draw multiple points to create patterns or shapes.</p>`,
                code: `# Draw Point on Canvas

class Point:
    def __init__(self, x, y, char='*'):
        self.x = x
        self.y = y
        self.char = char

class Canvas:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.grid = [[' ' for _ in range(width)] for _ in range(height)]
    
    def set_pixel(self, x, y, char='*'):
        if 0 <= x < self.width and 0 <= y < self.height:
            self.grid[y][x] = char
    
    def display(self):
        print('+' + '-' * self.width + '+')
        for row in self.grid:
            print('|' + ''.join(row) + '|')
        print('+' + '-' * self.width + '+')

def draw_point(canvas, point):
    """Draw a single point on the canvas."""
    canvas.set_pixel(point.x, point.y, point.char)

# Create canvas
canvas = Canvas(40, 15)

# Draw individual points
points = [
    Point(5, 5, 'A'),
    Point(10, 3, 'B'),
    Point(15, 7, 'C'),
    Point(20, 10, 'D'),
    Point(30, 2, 'E'),
]

for p in points:
    draw_point(canvas, p)

# Draw a diagonal line of points
for i in range(10):
    draw_point(canvas, Point(25 + i, 2 + i, '.'))

print("Canvas with Points:")
canvas.display()`,
                hasVisualization: true,
                vizType: "canvas_point"
            }
        ]
    },

    task9: {
        title: "Task 9: Circle Class, Validation & File Merge",
        description: "Circle class, phone/email validation, and merging files.",
        questions: [
            {
                title: "Circle Class and Drawing",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>A <strong>Circle</strong> class with attributes like center point, radius, and color.</p>
                <p>To draw a circle on a text canvas, we use the equation: <code>(x-cx)² + (y-cy)² = r²</code></p>
                <p>For each pixel on the canvas, check if it's approximately on the circle's edge.</p>`,
                code: `# Circle Class and Drawing

import math

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Circle:
    def __init__(self, center, radius, color='*'):
        self.center = center  # Point
        self.radius = radius
        self.color = color
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def circumference(self):
        return 2 * math.pi * self.radius
    
    def contains(self, point):
        dist = math.sqrt((point.x - self.center.x)**2 + 
                        (point.y - self.center.y)**2)
        return dist <= self.radius

class Canvas:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.grid = [[' ' for _ in range(width)] for _ in range(height)]
    
    def set_pixel(self, x, y, char='*'):
        if 0 <= x < self.width and 0 <= y < self.height:
            self.grid[y][x] = char
    
    def display(self):
        print('+' + '-' * self.width + '+')
        for row in self.grid:
            print('|' + ''.join(row) + '|')
        print('+' + '-' * self.width + '+')

def draw_circle(canvas, circle):
    """Draw a circle on the canvas using midpoint algorithm."""
    cx, cy = circle.center.x, circle.center.y
    r = circle.radius
    
    for angle in range(360):
        rad = math.radians(angle)
        x = int(cx + r * math.cos(rad))
        y = int(cy + r * 0.5 * math.sin(rad))  # 0.5 for aspect ratio
        canvas.set_pixel(x, y, circle.color)

# Create circles
c1 = Circle(Point(20, 10), 8)
c2 = Circle(Point(10, 7), 4, '#')

print(f"Circle 1 - Area: {c1.area():.2f}, Circumference: {c1.circumference():.2f}")
print(f"Circle 2 - Area: {c2.area():.2f}, Circumference: {c2.circumference():.2f}")

# Draw on canvas
canvas = Canvas(45, 22)
draw_circle(canvas, c1)
draw_circle(canvas, c2)

print("\\nCanvas with Circles:")
canvas.display()`,
                hasVisualization: true,
                vizType: "canvas_circle"
            },
            {
                title: "Validate Phone Number and Email",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Validation</strong> ensures user input meets expected format.</p>
                <p>Phone number validation:</p>
                <ul>
                    <li>Should be 10 digits (or with country code)</li>
                    <li>Can contain spaces, dashes, or parentheses</li>
                </ul>
                <p>Email validation (basic):</p>
                <ul>
                    <li>Must contain exactly one @ symbol</li>
                    <li>Must have text before and after @</li>
                    <li>Must have a domain with a dot (e.g., .com)</li>
                </ul>
                <p>We use <strong>regular expressions</strong> (regex) for pattern matching.</p>`,
                code: `# Validate Phone Number and Email

import re

def validate_phone(phone):
    """Validate a phone number (10 digits, optional formatting)."""
    # Remove spaces, dashes, parentheses
    cleaned = re.sub(r'[\s\-\(\)\+]', '', phone)
    
    # Check if it's 10 digits (or 11 with country code 1)
    if len(cleaned) == 10 and cleaned.isdigit():
        return True
    if len(cleaned) == 11 and cleaned[0] == '1' and cleaned[1:].isdigit():
        return True
    return False

def validate_email(email):
    """Validate an email address."""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

# Test phone numbers
print("=== Phone Validation ===")
phones = ["1234567890", "(123) 456-7890", "123-456-7890", 
          "12345", "abcdefghij", "+1 234 567 890"]

for phone in phones:
    result = validate_phone(phone)
    print(f"  {phone:25s} -> {'Valid' if result else 'Invalid'}")

# Test emails
print("\\n=== Email Validation ===")
emails = ["user@example.com", "user.name@domain.co", 
          "invalid@", "@nodomain.com", "no spaces@mail.com",
          "user@.com", "test123@gmail.com"]

for email in emails:
    result = validate_email(email)
    print(f"  {email:25s} -> {'Valid' if result else 'Invalid'}")

# User input
print("\\n--- Try it yourself ---")
phone = input("Enter phone number: ")
print(f"Phone '{phone}': {'Valid' if validate_phone(phone) else 'Invalid'}")

email = input("Enter email: ")
print(f"Email '{email}': {'Valid' if validate_email(email) else 'Invalid'}")`,
                hasVisualization: false
            },
            {
                title: "Merge Two Files into Third",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Merging files means combining the contents of two files into a third file.</p>
                <p>Steps:</p>
                <ol>
                    <li>Open first file in read mode</li>
                    <li>Open second file in read mode</li>
                    <li>Open third file in write mode</li>
                    <li>Write contents of both files to the third</li>
                </ol>
                <p>Since we can't create real files in the browser, this demo simulates the process.</p>`,
                code: `# Merge Contents of Two Files into a Third

# Simulated file merge (since we can't create files in browser)
# In real usage, use actual file operations

def merge_files(file1_path, file2_path, output_path):
    """Merge contents of two files into a third file."""
    try:
        with open(file1_path, 'r') as f1:
            content1 = f1.read()
        
        with open(file2_path, 'r') as f2:
            content2 = f2.read()
        
        with open(output_path, 'w') as out:
            out.write(content1)
            if not content1.endswith('\\n'):
                out.write('\\n')
            out.write(content2)
        
        print(f"Files merged successfully into '{output_path}'")
        return True
    
    except FileNotFoundError as e:
        print(f"Error: {e}")
        return False

# Demo with simulated content
print("=== File Merge Demo ===")
print("\\nFile 1 content:")
content1 = "Hello from File 1!\\nThis is line 2 of file 1."
print(content1)

print("\\nFile 2 content:")
content2 = "Hello from File 2!\\nThis is line 2 of file 2."
print(content2)

merged = content1 + "\\n" + content2
print("\\nMerged content:")
print(merged)

# Uncomment to use with real files:
# merge_files("file1.txt", "file2.txt", "merged.txt")`,
                hasVisualization: false
            }
        ]
    },

    task10: {
        title: "Task 10: File Operations",
        description: "Search words in file, find most frequent word, count words/vowels/spaces/letters.",
        questions: [
            {
                title: "Search Words in File",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This program opens a file and checks for the presence of specific words.</p>
                <p>Steps:</p>
                <ol>
                    <li>Open the file and read its content</li>
                    <li>Split content into individual words</li>
                    <li>Check if each target word exists in the word list</li>
                    <li>Display found words with their positions</li>
                </ol>`,
                code: `# Search for Words in a File

def search_words_in_text(text, search_words):
    """Search for given words in text and display results."""
    words = text.lower().split()
    found = {}
    
    for word in search_words:
        count = words.count(word.lower())
        if count > 0:
            found[word] = count
    
    return found

# Simulated file content
sample_text = """Python is a great programming language.
Python is used for web development, data science, and automation.
Learning Python is fun and rewarding.
Many developers love Python for its simplicity."""

print("=== File Content ===")
print(sample_text)

# Words to search
search = ["Python", "is", "great", "java", "programming", "fun"]

print("\\n=== Search Results ===")
results = search_words_in_text(sample_text, search)

for word in search:
    if word in results:
        print(f"  '{word}' -> Found {results[word]} time(s)")
    else:
        print(f"  '{word}' -> Not found")

# User search
print("\\n--- Search your own words ---")
user_words = input("Enter words to search (comma-separated): ").split(",")
user_words = [w.strip() for w in user_words]
results = search_words_in_text(sample_text, user_words)

for word, count in results.items():
    print(f"  '{word}' found {count} time(s)")`,
                hasVisualization: false
            },
            {
                title: "Find Most Frequent Word",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Finding the <strong>most frequently occurring word</strong> in a text file.</p>
                <p>Algorithm:</p>
                <ol>
                    <li>Read the text and split into words</li>
                    <li>Count occurrences of each word using a dictionary</li>
                    <li>Find the word with the maximum count</li>
                </ol>
                <p>Python's <code>collections.Counter</code> makes this very easy.</p>`,
                code: `# Find Word with Greatest Number of Occurrences

def find_most_frequent(text):
    """Find the most frequently occurring word."""
    # Clean and split
    import re
    words = re.findall(r'[a-zA-Z]+', text.lower())
    
    # Count occurrences
    word_count = {}
    for word in words:
        word_count[word] = word_count.get(word, 0) + 1
    
    # Find max
    if not word_count:
        return None, 0
    
    max_word = max(word_count, key=word_count.get)
    return max_word, word_count[max_word], word_count

# Sample text (simulating file content)
text = """Python is a powerful programming language. Python is widely used
in web development, data science, machine learning, and automation.
Python has a simple syntax that makes it easy to learn. Many beginners
choose Python as their first programming language because Python is
versatile and has a large community."""

print("=== Text Content ===")
print(text)

max_word, max_count, all_counts = find_most_frequent(text)

print(f"\\n=== Results ===")
print(f"Most frequent word: '{max_word}' (appears {max_count} times)")

print("\\n--- Top 10 Words ---")
sorted_words = sorted(all_counts.items(), key=lambda x: x[1], reverse=True)
for word, count in sorted_words[:10]:
    bar = '#' * count
    print(f"  {word:15s} : {count:3d} {bar}")`,
                hasVisualization: true,
                vizType: "word_freq"
            },
            {
                title: "Count Words, Vowels, Spaces, Letters",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>This function analyzes a text file and counts:</p>
                <ul>
                    <li><strong>Words:</strong> Sequences of characters separated by spaces</li>
                    <li><strong>Vowels:</strong> a, e, i, o, u (both cases)</li>
                    <li><strong>Blank spaces:</strong> Space characters</li>
                    <li><strong>Lowercase letters:</strong> a-z</li>
                    <li><strong>Uppercase letters:</strong> A-Z</li>
                </ul>`,
                code: `# Count Words, Vowels, Spaces, Lowercase, Uppercase

def analyze_text(text):
    """Analyze text and return statistics."""
    stats = {
        'words': 0,
        'vowels': 0,
        'spaces': 0,
        'lowercase': 0,
        'uppercase': 0
    }
    
    vowels = set('aeiouAEIOU')
    
    for char in text:
        if char == ' ':
            stats['spaces'] += 1
        elif char in vowels:
            stats['vowels'] += 1
        
        if char.islower():
            stats['lowercase'] += 1
        elif char.isupper():
            stats['uppercase'] += 1
    
    stats['words'] = len(text.split())
    
    return stats

# Sample text
text = """Hello World! This is a Sample Text File.
Python Programming is Fun and Exciting.
Always Keep Learning New Things."""

print("=== Text Content ===")
print(text)

stats = analyze_text(text)

print("\\n=== Analysis Results ===")
print(f"  Number of Words:      {stats['words']}")
print(f"  Number of Vowels:     {stats['vowels']}")
print(f"  Number of Spaces:     {stats['spaces']}")
print(f"  Lowercase Letters:    {stats['lowercase']}")
print(f"  Uppercase Letters:    {stats['uppercase']}")

# Visual bar chart
print("\\n=== Visual Summary ===")
for key, val in stats.items():
    bar = '█' * (val // 2)
    print(f"  {key:18s}: {bar} ({val})")`,
                hasVisualization: true,
                vizType: "text_stats"
            }
        ]
    },

    task11: {
        title: "Task 11: NumPy, SciPy & Logic Gates",
        description: "Explore NumPy/SciPy and implement digital logic gates.",
        questions: [
            {
                title: "NumPy & SciPy Exploration",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>NumPy</strong> is the fundamental package for scientific computing in Python.</p>
                <p><strong>SciPy</strong> builds on NumPy with advanced mathematical functions.</p>
                <p><strong>Plotly</strong> is used for interactive visualizations.</p>
                <p>Key NumPy features:</p>
                <ul>
                    <li>N-dimensional arrays (ndarray)</li>
                    <li>Mathematical functions on arrays</li>
                    <li>Linear algebra, random number generation</li>
                    <li>Broadcasting for operations on different-shaped arrays</li>
                </ul>`,
                code: `# NumPy Exploration (basic version without numpy)

# Simulating NumPy-like operations with pure Python

class SimpleArray:
    """Simple array class to demonstrate NumPy-like operations."""
    
    def __init__(self, data):
        if isinstance(data[0], list):
            self.data = data
            self.shape = (len(data), len(data[0]))
        else:
            self.data = data
            self.shape = (len(data),)
    
    def __repr__(self):
        return f"SimpleArray({self.data})"
    
    def __add__(self, other):
        if isinstance(other, SimpleArray):
            if len(self.shape) == 1:
                return SimpleArray([a + b for a, b in zip(self.data, other.data)])
        return SimpleArray([a + other for a in self.data])
    
    def __mul__(self, other):
        if isinstance(other, SimpleArray):
            if len(self.shape) == 1:
                return SimpleArray([a * b for a, b in zip(self.data, other.data)])
        return SimpleArray([a * other for a in self.data])
    
    def sum(self):
        if len(self.shape) == 1:
            return sum(self.data)
        return sum(sum(row) for row in self.data)
    
    def mean(self):
        total = self.sum()
        count = self.shape[0] if len(self.shape) == 1 else self.shape[0] * self.shape[1]
        return total / count

# Create arrays
arr1 = SimpleArray([1, 2, 3, 4, 5])
arr2 = SimpleArray([10, 20, 30, 40, 50])

print("=== Array Operations ===")
print(f"Array 1: {arr1}")
print(f"Array 2: {arr2}")
print(f"Sum:     {arr1 + arr2}")
print(f"Product: {arr1 * arr2}")
print(f"Array1 * 3: {arr1 * 3}")
print(f"Sum of arr1: {arr1.sum()}")
print(f"Mean of arr1: {arr1.mean()}")

print("\\nNote: Install numpy for full functionality:")
print("  pip install numpy scipy plotly")`,
                hasVisualization: false
            },
            {
                title: "Install and Explore NumPy",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>Installing NumPy with pip: <code>pip install numpy</code></p>
                <p>Key NumPy operations covered:</p>
                <ul>
                    <li>Creating arrays: <code>np.array()</code>, <code>np.zeros()</code>, <code>np.ones()</code></li>
                    <li>Array operations: element-wise math</li>
                    <li>Array indexing and slicing</li>
                    <li>Reshaping: <code>reshape()</code></li>
                    <li>Statistical functions: <code>mean()</code>, <code>std()</code>, <code>sum()</code></li>
                </ul>`,
                code: `# NumPy Installation and Exploration
# Run: pip install numpy

# This code demonstrates NumPy concepts
# If numpy is not installed, it shows pure Python equivalent

try:
    import numpy as np
    HAS_NUMPY = True
except ImportError:
    HAS_NUMPY = False
    print("NumPy not installed. Showing equivalent operations.\\n")

if HAS_NUMPY:
    print("=== NumPy Array Creation ===")
    a = np.array([1, 2, 3, 4, 5])
    b = np.zeros(5)
    c = np.ones((3, 3))
    d = np.arange(0, 10, 2)
    
    print(f"Array:      {a}")
    print(f"Zeros:      {b}")
    print(f"Ones:\\n{c}")
    print(f"Range:      {d}")
    
    print("\\n=== Array Operations ===")
    x = np.array([1, 2, 3])
    y = np.array([4, 5, 6])
    print(f"x + y = {x + y}")
    print(f"x * y = {x * y}")
    print(f"Dot product: {np.dot(x, y)}")
    print(f"Mean: {np.mean(x)}")
    print(f"Std Dev: {np.std(x)}")
else:
    print("Install numpy: pip install numpy")
    print("\\nEquivalent pure Python:")
    a = [1, 2, 3, 4, 5]
    print(f"Array: {a}")
    print(f"Sum: {sum(a)}")
    print(f"Mean: {sum(a)/len(a)}")`,
                hasVisualization: false
            },
            {
                title: "Digital Logic Gates",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Digital Logic Gates</strong> are the building blocks of digital circuits.</p>
                <ul>
                    <li><strong>AND:</strong> Output is 1 only if BOTH inputs are 1</li>
                    <li><strong>OR:</strong> Output is 1 if ANY input is 1</li>
                    <li><strong>NOT:</strong> Output is the inverse of input</li>
                    <li><strong>XOR:</strong> Output is 1 if inputs are DIFFERENT</li>
                </ul>
                <p>Truth tables show all possible input-output combinations.</p>`,
                code: `# Digital Logic Gates - AND, OR, NOT, XOR

def AND(a, b):
    """AND gate: returns 1 only if both inputs are 1."""
    return a & b

def OR(a, b):
    """OR gate: returns 1 if any input is 1."""
    return a | b

def NOT(a):
    """NOT gate: returns inverse of input."""
    return 1 - a

def XOR(a, b):
    """XOR gate: returns 1 if inputs are different."""
    return a ^ b

# Display truth tables
gates = [
    ("AND", AND, "Output=1 only when BOTH inputs are 1"),
    ("OR", OR, "Output=1 when ANY input is 1"),
    ("XOR", XOR, "Output=1 when inputs are DIFFERENT"),
]

print("=== Digital Logic Gates Truth Tables ===")

for name, func, desc in gates:
    print(f"\\n--- {name} Gate ---")
    print(f"Description: {desc}")
    print(f"{'A':>3} {'B':>3} | {name:>5}")
    print("-" * 16)
    for a in [0, 1]:
        for b in [0, 1]:
            result = func(a, b)
            print(f"{a:>3} {b:>3} | {result:>5}")

# NOT gate (single input)
print("\\n--- NOT Gate ---")
print("Description: Output is the inverse of input")
print(f"{'A':>3} | {'NOT':>5}")
print("-" * 12)
for a in [0, 1]:
    print(f"{a:>3} | {NOT(a):>5}")

# Combined circuit: (A AND B) OR (NOT C)
print("\\n=== Combined Circuit: (A AND B) OR (NOT C) ===")
print(f"{'A':>3} {'B':>3} {'C':>3} | {'Result':>8}")
print("-" * 22)
for a in [0, 1]:
    for b in [0, 1]:
        for c in [0, 1]:
            result = OR(AND(a, b), NOT(c))
            print(f"{a:>3} {b:>3} {c:>3} | {result:>8}")`,
                hasVisualization: true,
                vizType: "logic_gates"
            }
        ]
    },

    task12: {
        title: "Task 12: GUI Programming",
        description: "Create a window wizard with labels, fields, and buttons using Tkinter.",
        questions: [
            {
                title: "GUI Window Wizard",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Tkinter</strong> is Python's built-in GUI (Graphical User Interface) library.</p>
                <p>Components used:</p>
                <ul>
                    <li><code>Tk()</code> - Main window</li>
                    <li><code>Label</code> - Text display</li>
                    <li><code>Entry</code> - Text input field</li>
                    <li><code>Button</code> - Clickable button</li>
                    <li><code>StringVar()</code> - Variable to hold entry data</li>
                </ul>
                <p>Since Tkinter needs a display, this code shows the structure and can be run locally.</p>`,
                code: `# GUI Window Wizard with Tkinter
# NOTE: Run this on your local machine (needs display)

import tkinter as tk
from tkinter import messagebox

def submit():
    """Handle submit button click."""
    name = name_entry.get()
    email = email_entry.get()
    
    if name and email:
        messagebox.showinfo("Success", 
            f"Name: {name}\\nEmail: {email}\\nSubmitted successfully!")
    else:
        messagebox.showwarning("Warning", "Please fill all fields!")

def reset():
    """Handle reset button click."""
    name_entry.delete(0, tk.END)
    email_entry.delete(0, tk.END)

# Create main window
root = tk.Tk()
root.title("Window Wizard")
root.geometry("400x300")
root.configure(bg="#f0f0f0")

# Title
title_label = tk.Label(root, text="Registration Form", 
                       font=("Arial", 16, "bold"), bg="#f0f0f0")
title_label.pack(pady=20)

# Frame for form
frame = tk.Frame(root, bg="#f0f0f0")
frame.pack(pady=10)

# Name field
tk.Label(frame, text="Name:", font=("Arial", 12), 
         bg="#f0f0f0").grid(row=0, column=0, padx=10, pady=10, sticky="e")
name_entry = tk.Entry(frame, font=("Arial", 12), width=25)
name_entry.grid(row=0, column=1, padx=10, pady=10)

# Email field
tk.Label(frame, text="Email:", font=("Arial", 12), 
         bg="#f0f0f0").grid(row=1, column=0, padx=10, pady=10, sticky="e")
email_entry = tk.Entry(frame, font=("Arial", 12), width=25)
email_entry.grid(row=1, column=1, padx=10, pady=10)

# Buttons
btn_frame = tk.Frame(root, bg="#f0f0f0")
btn_frame.pack(pady=20)

submit_btn = tk.Button(btn_frame, text="Submit", font=("Arial", 12),
                       bg="#4CAF50", fg="white", command=submit, width=10)
submit_btn.grid(row=0, column=0, padx=10)

reset_btn = tk.Button(btn_frame, text="Reset", font=("Arial", 12),
                      bg="#f44336", fg="white", command=reset, width=10)
reset_btn.grid(row=0, column=1, padx=10)

# Start the GUI
# root.mainloop()  # Uncomment to run

print("GUI Code Structure:")
print("  - Window: 400x300 pixels")
print("  - Two labels: 'Name' and 'Email'")
print("  - Two text entry fields")
print("  - Submit button (green)")
print("  - Reset button (red)")
print("\\nTo run: Save as .py file and execute locally")`,
                hasVisualization: false
            }
        ]
    },

    task13: {
        title: "Task 13: Pandas DataFrame",
        description: "Create DataFrames, read CSV, filter, handle missing data, group, sort.",
        questions: [
            {
                title: "Create DataFrame from Dictionary & Read CSV",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Pandas</strong> is the most popular data manipulation library in Python.</p>
                <p><strong>DataFrame</strong> is a 2D labeled data structure (like a spreadsheet).</p>
                <ul>
                    <li>Create from dictionary: keys become column names, values become data</li>
                    <li>Read CSV: <code>pd.read_csv('file.csv')</code></li>
                </ul>`,
                code: `# Pandas DataFrame - Create and Read CSV

# Simulated pandas-like operations (install pandas for real use)

class SimpleDataFrame:
    """Simple DataFrame class to demonstrate pandas concepts."""
    
    def __init__(self, data):
        self.data = data
        self.columns = list(data.keys())
        self.index = range(len(list(data.values())[0]))
    
    def __repr__(self):
        header = "  ".join(f"{col:>12}" for col in self.columns)
        lines = [header, "-" * len(header)]
        for i in self.index:
            row = "  ".join(f"{str(self.data[col][i]):>12}" for col in self.columns)
            lines.append(row)
        return "\\n".join(lines)
    
    def head(self, n=5):
        """Show first n rows."""
        new_data = {col: self.data[col][:n] for col in self.columns}
        return SimpleDataFrame(new_data)

# Create DataFrame from dictionary
print("=== Create DataFrame from Dictionary ===")
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 22],
    'City': ['NYC', 'LA', 'Chicago', 'Houston', 'Phoenix'],
    'Salary': [50000, 60000, 75000, 55000, 48000]
}

df = SimpleDataFrame(data)
print(df)

print("\\n=== Read CSV (Simulated) ===")
csv_data = """Name,Age,Department
Alice,25,Engineering
Bob,30,Marketing
Charlie,35,Engineering
Diana,28,Sales"""

print("CSV Content:")
print(csv_data)

# Parse CSV manually
lines = csv_data.strip().split('\\n')
headers = lines[0].split(',')
rows = [line.split(',') for line in lines[1:]]

csv_dict = {h: [] for h in headers}
for row in rows:
    for i, h in enumerate(headers):
        csv_dict[h].append(row[i])

csv_df = SimpleDataFrame(csv_dict)
print("\\nParsed DataFrame:")
print(csv_df)

print("\\nNote: Install pandas for full functionality:")
print("  pip install pandas")`,
                hasVisualization: false
            },
            {
                title: "Filter Rows & Handle Missing Data",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Filtering</strong> means selecting rows that meet a condition.</p>
                <p><strong>Missing data</strong> handling:</p>
                <ul>
                    <li><code>None</code> or <code>NaN</code> represents missing values</li>
                    <li><code>dropna()</code> - Remove rows with missing values</li>
                    <li><code>fillna(value)</code> - Replace missing values</li>
                    <li><code>isna()</code> - Check for missing values</li>
                </ul>`,
                code: `# Filter Rows and Handle Missing Data

# Simulated DataFrame operations

data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 22],
    'Salary': [50000, None, 75000, 55000, None],
    'Department': ['Eng', 'Mkt', 'Eng', 'Sales', 'Mkt']
}

print("=== Original Data ===")
for i in range(len(data['Name'])):
    print(f"  {data['Name'][i]:10} | Age: {data['Age'][i]} | "
          f"Salary: {data['Salary'][i]} | Dept: {data['Department'][i]}")

# Filter: Age > 25
print("\\n=== Filter: Age > 25 ===")
for i in range(len(data['Name'])):
    if data['Age'][i] > 25:
        print(f"  {data['Name'][i]:10} | Age: {data['Age'][i]}")

# Filter: Department is 'Eng'
print("\\n=== Filter: Department == 'Eng' ===")
for i in range(len(data['Name'])):
    if data['Department'][i] == 'Eng':
        print(f"  {data['Name'][i]:10} | Dept: {data['Department'][i]}")

# Handle missing data
print("\\n=== Handle Missing Data ===")
print("Missing values (None):")
for i in range(len(data['Name'])):
    if data['Salary'][i] is None:
        print(f"  {data['Name'][i]}: Salary is missing")

# Fill missing with 0
print("\\nFill missing salaries with 0:")
filled = data['Salary'].copy()
for i in range(len(filled)):
    if filled[i] is None:
        filled[i] = 0
    print(f"  {data['Name'][i]:10}: {filled[i]}")

# Fill with mean
valid_salaries = [s for s in data['Salary'] if s is not None]
mean_salary = sum(valid_salaries) / len(valid_salaries)
print(f"\\nFill missing salaries with mean ({mean_salary:.0f}):")
filled_mean = data['Salary'].copy()
for i in range(len(filled_mean)):
    if filled_mean[i] is None:
        filled_mean[i] = mean_salary
    print(f"  {data['Name'][i]:10}: {filled_mean[i]:.0f}")`,
                hasVisualization: false
            },
            {
                title: "Group, Aggregate & Sort",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Grouping</strong> splits data into groups based on a column.</p>
                <p><strong>Aggregation</strong> computes a summary statistic for each group (sum, mean, count).</p>
                <p><strong>Sorting</strong> arranges data by values in a column.</p>`,
                code: `# Group, Aggregate, and Sort DataFrame

data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'],
    'Department': ['Eng', 'Mkt', 'Eng', 'Sales', 'Mkt', 'Eng'],
    'Salary': [50000, 60000, 75000, 55000, 48000, 70000],
    'Age': [25, 30, 35, 28, 22, 32]
}

print("=== Original Data ===")
print(f"{'Name':10} {'Dept':6} {'Salary':8} {'Age':4}")
print("-" * 30)
for i in range(len(data['Name'])):
    print(f"{data['Name'][i]:10} {data['Department'][i]:6} "
          f"{data['Salary'][i]:8} {data['Age'][i]:4}")

# Group by Department and Aggregate
print("\\n=== Group by Department ===")
groups = {}
for i in range(len(data['Name'])):
    dept = data['Department'][i]
    if dept not in groups:
        groups[dept] = {'salaries': [], 'ages': [], 'count': 0}
    groups[dept]['salaries'].append(data['Salary'][i])
    groups[dept]['ages'].append(data['Age'][i])
    groups[dept]['count'] += 1

print(f"{'Dept':6} {'Count':6} {'Avg Salary':12} {'Avg Age':8}")
print("-" * 35)
for dept, info in groups.items():
    avg_sal = sum(info['salaries']) / info['count']
    avg_age = sum(info['ages']) / info['count']
    print(f"{dept:6} {info['count']:6} {avg_sal:12.0f} {avg_age:8.1f}")

# Sort by Salary (ascending)
print("\\n=== Sort by Salary (Ascending) ===")
indices = sorted(range(len(data['Salary'])), key=lambda i: data['Salary'][i])
for i in indices:
    print(f"  {data['Name'][i]:10}: Rs.{data['Salary'][i]}")

# Sort by Salary (descending)
print("\\n=== Sort by Salary (Descending) ===")
indices = sorted(range(len(data['Salary'])), key=lambda i: data['Salary'][i], reverse=True)
for i in indices:
    print(f"  {data['Name'][i]:10}: Rs.{data['Salary'][i]}")`,
                hasVisualization: false
            }
        ]
    },

    task14: {
        title: "Task 14: OOP & Inheritance",
        description: "Drop/rename columns, student class, single/multiple inheritance, method overriding.",
        questions: [
            {
                title: "Drop & Rename Columns",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Drop columns:</strong> Remove unwanted columns from a DataFrame.</p>
                <p><strong>Rename columns:</strong> Change column names.</p>
                <p>In pandas: <code>df.drop(columns=['col'])</code> and <code>df.rename(columns={'old': 'new'})</code></p>`,
                code: `# Drop and Rename Columns in DataFrame

data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'Salary': [50000, 60000, 75000],
    'Temp': [98, 97, 99]
}

print("=== Original Data ===")
print("Columns:", list(data.keys()))
for i in range(len(data['Name'])):
    vals = [f"{k}: {data[k][i]}" for k in data]
    print(f"  {', '.join(vals)}")

# Drop column 'Temp'
print("\\n=== After Dropping 'Temp' Column ===")
filtered = {k: v for k, v in data.items() if k != 'Temp'}
print("Columns:", list(filtered.keys()))
for i in range(len(filtered['Name'])):
    vals = [f"{k}: {filtered[k][i]}" for k in filtered]
    print(f"  {', '.join(vals)}")

# Rename columns
print("\\n=== After Renaming ===")
rename_map = {'Name': 'Employee', 'Salary': 'Annual_Salary'}
renamed = {}
for k, v in filtered.items():
    new_key = rename_map.get(k, k)
    renamed[new_key] = v

print("Columns:", list(renamed.keys()))
for i in range(len(renamed['Employee'])):
    vals = [f"{k}: {renamed[k][i]}" for k in renamed]
    print(f"  {', '.join(vals)}")`,
                hasVisualization: false
            },
            {
                title: "Student Class - Attributes & Methods",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p>A <strong>class</strong> is a blueprint for creating objects.</p>
                <ul>
                    <li><code>__init__</code> is the constructor - initializes attributes</li>
                    <li><code>self</code> refers to the current instance</li>
                    <li>Methods are functions defined inside a class</li>
                </ul>
                <p>The Student class has attributes: name, roll_no, and methods to display details.</p>`,
                code: `# Student Class with Attributes and Methods

class Student:
    """A class to represent a student."""
    
    def __init__(self, name, roll_no, marks=None):
        self.name = name
        self.roll_no = roll_no
        self.marks = marks or {}
    
    def display_details(self):
        """Display student information."""
        print(f"\\n--- Student Details ---")
        print(f"  Name:    {self.name}")
        print(f"  Roll No: {self.roll_no}")
        if self.marks:
            print(f"  Marks:")
            for subject, mark in self.marks.items():
                print(f"    {subject}: {mark}")
            avg = sum(self.marks.values()) / len(self.marks)
            print(f"  Average: {avg:.1f}")
    
    def add_marks(self, subject, mark):
        """Add marks for a subject."""
        self.marks[subject] = mark
    
    def get_average(self):
        """Calculate average marks."""
        if not self.marks:
            return 0
        return sum(self.marks.values()) / len(self.marks)
    
    def is_passed(self, passing=40):
        """Check if student passed all subjects."""
        return all(m >= passing for m in self.marks.values())

# Create Student objects
s1 = Student("Alice", 101, {"Math": 85, "Physics": 90, "Chemistry": 78})
s2 = Student("Bob", 102)

s1.display_details()

s2.add_marks("Math", 55)
s2.add_marks("Physics", 42)
s2.add_marks("Chemistry", 38)
s2.display_details()

print(f"\\n{s1.name} passed: {s1.is_passed()}")
print(f"{s2.name} passed: {s2.is_passed()}")`,
                hasVisualization: false
            },
            {
                title: "Single Inheritance",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Single inheritance</strong> means a child class inherits from ONE parent class.</p>
                <ul>
                    <li>Child class gets all attributes and methods of parent</li>
                    <li>Child can add new attributes/methods</li>
                    <li>Child can <strong>override</strong> parent methods</li>
                    <li><code>super()</code> calls the parent's method</li>
                </ul>`,
                code: `# Single Inheritance Demonstration

class Person:
    """Parent class - represents a person."""
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name}, {self.age} years old."
    
    def is_adult(self):
        return self.age >= 18

class Student(Person):
    """Child class - inherits from Person."""
    
    def __init__(self, name, age, roll_no, course):
        super().__init__(name, age)  # Call parent constructor
        self.roll_no = roll_no
        self.course = course
    
    def introduce(self):
        """Override parent method."""
        base = super().introduce()
        return f"{base} I'm a {self.course} student (Roll: {self.roll_no})."
    
    def study(self):
        return f"{self.name} is studying {self.course}."

class Teacher(Person):
    """Another child class - inherits from Person."""
    
    def __init__(self, name, age, subject, salary):
        super().__init__(name, age)
        self.subject = subject
        self.salary = salary
    
    def introduce(self):
        """Override parent method."""
        base = super().introduce()
        return f"{base} I teach {self.subject}."
    
    def teach(self):
        return f"{self.name} is teaching {self.subject}."

# Demonstrate inheritance
print("=== Single Inheritance Demo ===")

person = Person("John", 30)
student = Student("Alice", 20, "S001", "Computer Science")
teacher = Teacher("Dr. Smith", 45, "Mathematics", 75000)

print(person.introduce())
print(student.introduce())
print(teacher.introduce())

print(f"\\n{student.study()}")
print(teacher.teach())

print(f"\\n{person.name} is adult: {person.is_adult()}")
print(f"{student.name} is adult: {student.is_adult()}")

# Check inheritance
print(f"\\nStudent is Person: {isinstance(student, Person)}")
print(f"Teacher is Person: {isinstance(teacher, Person)}")`,
                hasVisualization: false
            },
            {
                title: "Multiple Inheritance & Method Overriding",
                explanation: `<h4><i class="fas fa-lightbulb"></i> Explanation</h4>
                <p><strong>Multiple inheritance</strong> means a class inherits from MORE THAN ONE parent.</p>
                <p><strong>Method Resolution Order (MRO):</strong> Python uses C3 linearization to determine which method to call.</p>
                <p><strong>Method overriding</strong> means redefining a parent's method in the child class.</p>
                <ul>
                    <li>Child class inherits from multiple parents</li>
                    <li>If both parents have the same method, MRO determines which is called</li>
                    <li>Use <code>super()</code> or explicitly call parent methods</li>
                </ul>`,
                code: `# Multiple Inheritance and Method Overriding

class Father:
    """Father class."""
    
    def __init__(self):
        self.father_name = "Mr. Johnson"
    
    def skills(self):
        return ["Cooking", "Driving"]
    
    def introduce(self):
        return f"I am the father: {self.father_name}"

class Mother:
    """Mother class."""
    
    def __init__(self):
        self.mother_name = "Mrs. Johnson"
    
    def skills(self):
        return ["Painting", "Singing"]
    
    def introduce(self):
        return f"I am the mother: {self.mother_name}"

class Child(Father, Mother):
    """Child inherits from both Father and Mother (Multiple Inheritance)."""
    
    def __init__(self, name):
        Father.__init__(self)
        Mother.__init__(self)
        self.child_name = name
    
    def skills(self):
        """Override - combine skills from both parents."""
        father_skills = Father.skills(self)
        mother_skills = Mother.skills(self)
        return father_skills + mother_skills + ["Gaming", "Coding"]
    
    def introduce(self):
        """Override introduction."""
        return (f"I am {self.child_name}, "
                f"child of {self.father_name} and {self.mother_name}")

# Demonstrate multiple inheritance
print("=== Multiple Inheritance Demo ===")

child = Child("Alex")

print(child.introduce())
print(f"\\nAll skills: {child.skills()}")

# Method Resolution Order (MRO)
print(f"\\nMRO for Child: {[c.__name__ for c in Child.__mro__]}")

# Without overriding
print("\\n=== Without Overriding (using Father's method) ===")
print(f"Father says: {Father.introduce(child)}")
print(f"Mother says: {Mother.introduce(child)}")

# Method overriding demo
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

print("\\n=== Method Overriding ===")
animals = [Animal(), Dog(), Cat()]
for animal in animals:
    print(f"{animal.__class__.__name__}: {animal.speak()}")`,
                hasVisualization: false
            }
        ]
    }
};
