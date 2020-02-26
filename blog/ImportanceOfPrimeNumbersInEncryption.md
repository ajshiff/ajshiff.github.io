# Usage of Prime Numbers in Encryption
February 26, 2020

Prime numbers and prime factorization are used in some encryption algorithms. The larger a number is, the more difficult it is to prime factor. For example, if I asked you to find the prime factorization of a number like 15, 27, or even 144, it could be figured out within a very short period of time. But what if I asked you to solve the prime factorization of 44618574? Where would you start? Factor out a 2. Right. Then what? You still have to determine all of the other prime factors that went into creating that number. 44618574 is actually a special number. It is the product of the first 8 prime numbers. It would take much more time to determine the prime factorization of that number beginning at that number, than it would to just multiply all of those prime factors together in the first place. 

This idea is important in data encryption, because when encrypting, you want something that is easy and fast to encrypt, but difficult to an outsider to reverse. A digital signature can be created by encrypting something with a private key, then anyone can verify that the message contents were sent by you, by decrypting it with a corresponding public key. This is similar to the idea we discussed in class where you 'perfect' shuffle a deck of cards 6 times (private key), so to get it back to its original state, you need to shuffle it 2 more times (public key). The idea of a deck of cards is so small and simple, that this would not be a secure implementation, but it is useful for illustrating the concept between these two ideas. In this example, you know that the private key is 'shuffle 6 times', but when this is scaled up, you have no idea what the 'shuffling' process was. But you know that if you use the formula, using your public key (shuffling 2 times, in this example), that you get the intended message. By having a unique and large private key paired with a reliable algorithm, it becomes incredibly improbable for someone to guess your key, or to impersonate you. 

I am sure that many algorithms rely on prime numbers to ensure uniqueness. If prime numbers weren't used, then I believe that a non-uniqueness bug could be introduced to the encoding algorithm. It would be like having a password to your computer, but in reality there were multiple valid answers. Therefore, it is important to be able to generate a list of prime numbers, and guarantee that they are prime.  

## Question:

How can I solve for a list of primes? How can I know with assurance that a given number is a prime? 

These two ideas are very closely related. Determining whether a number is prime, requires an existing list of prime numbers. Determining a list of prime numbers, requires needing the ability to generate prime numbers, and check whether it is prime. There seems to be a circular dependency here. How can I eliminate that?

Solving for a List of Prime Numbers:

My initial thought is to start with 2, square it, and subtract 1. Use the modulus of all primes gathered at this point (which on the first run is only 2). If the modulus is 0 for any of the primes gathered to that point, then it is not prime, otherwise it is prime. Working it out would look something like this:


Prime | Power | Prime^Power | Prime^Power - 1 | Modulus | Assertion
------|-------|-------------|-----------------|---------|-----------
2 | 2 | 4  | 3  | 3%2=1                 | Is Prime
2 | 3 | 8  | 7  | 7%2=1, 7%3=1          | Is Prime
3 | 2 | 9  | 8  | 8%2=0                 | Not Prime
2 | 4 | 16 | 15 | 15%2=1, 15%3=0, 15%7=1| Not Prime

So on so forth, for all powers of known prime numbers. This definitely finds some primes, but you may have noticed that '11', which is a known prime, was missed using this approach.

Another approach I took is to manually add 2 as a prime number initially, then use `((i * 2) - 1)` with i starting at 1, looping indefinitely (which loops through odd numbers), and then brute-force check based on all previously accumulated determined prime numbers. This approach seems incredibly inefficient, but would theoretically work. 

Determining Whether a Number is Prime

With a bit of research, I determined that I could cut down my checks by only checking whether `number%prime=0` for values less than `\sqrt(number)`. This is because any number that is a prime factor that is greater than \sqrt(number) would have its match found with its lower counterpart. For example, `\sqrt(51)=7.1414`. So I only need to check prime numbers 7 and lower. `51%7=2`, `51%5=1`, `51%3=0`, so 51 is not prime. I didn't need to check prime numbers between 7 and 51 to make this determination. The largest prime factor of a number, without having a lower counter part, is the factor multiplied by itself, as is the case in 49, which is 7*7. This is proof that the \sqrt(number) is a valid technique to reduce the number of prime numbers that need to be checked in determining whether a number is prime. 

This is as far as I have been able to figure out. If anyone else has any insight, particularly in generating a list of prime numbers, I'd love to hear more.