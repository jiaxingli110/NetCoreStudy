using System;
using TestAndPractice.Knowledge;


namespace TestAndPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 拓展方法
            string input = "";
            input.DoExtend();
            //int input2 = 2;
            //input2.DoExtend();
            //new Person { Name = "Che" };
            new Person { Name = "Che" }.Do(x => x.Run()).Do(x=>x.Sing());
            #endregion
            #region Action用法
            ActionTest ac = new ActionTest();
            ac.Execute();
            #endregion
            #region
            //CacheHelper<int> helper = new CacheHelper<int>();
            CacheHelper<object> helper2 = new CacheHelper<object>();
            #endregion

        }
    }
}
