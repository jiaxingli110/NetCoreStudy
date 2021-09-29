using System;
using System.Collections.Generic;
using System.Text;

namespace TestAndPractice.Knowledge
{
    public static class ExtendMethod
    {
        public static void DoExtend(this string input)
        {
            Console.WriteLine("拓展方法");
            Console.ReadLine();
        }
        public static T Do<T>(this T t, Action<T> action)
        {
            action(t);
            return t;
        }
    }
    class Person
    {
        public string Name { get; set; }

        public Person Run()
        {
            Console.WriteLine("Run");
            return this;
        }
        public Person Swim()
        {
            Console.WriteLine("Swim");
            return this;
        }
        public Person Sing()
        {
            Console.WriteLine("Sing");
            return this;
        }
    }
}
