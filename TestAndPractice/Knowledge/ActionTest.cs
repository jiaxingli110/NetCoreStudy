using System;
using System.Collections.Generic;
using System.Text;

namespace TestAndPractice
{
    public class ActionTest
    {
        delegate void BuyBook();
        public static void Book()
        {
            Console.WriteLine("我是提供书籍的");
            Console.ReadLine();
        }
        public static void Book(string BookName)
        {
            Console.WriteLine("我是买书的是:{0}", BookName);
            Console.ReadLine();
        }
        public static string FuncBook(string BookName)
        {
            return BookName;
        }
        public void Execute()
        {
            //Action
            BuyBook buybook = new BuyBook(Book);
            buybook();
            Action<string> ac = new Action<string>(Book);
            ac("Learn ");
            //Func
            Func<string, string> RetBook = new Func<string, string>(FuncBook);
            Console.WriteLine(RetBook("aaa"));
        }
    }
}
