using System;
using System.Collections.Generic;
using System.Text;

namespace TestAndPractice.Knowledge
{
    /// <summary>
    /// 泛型
    /// </summary>
    public class TType<T>
    {
        private T[] array;
        public TType(int size)
        {
            array = new T[size + 1];
        }
        public T getItem(int index)
        {
            return array[index];
        }
        public void setItem(int index, T value)
        {
            array[index] = value;
        }
        void Swap<K>(ref K lhs, ref K rhs)
        {
            K temp;
            temp = lhs;
            lhs = rhs;
            rhs = temp;
        }

    }
    public class CacheHelper<T> where T : class
    {

    }
}
