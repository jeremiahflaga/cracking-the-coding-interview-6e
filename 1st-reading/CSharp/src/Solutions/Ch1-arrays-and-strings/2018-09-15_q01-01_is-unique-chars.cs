using System;
using System.Collections.Generic;
using System.Text;

namespace Solutions.Ch1_arrays_and_strings
{
	public class Q01_01_is_unique_chars
	{
		public static bool isUniqueChars(String str)
		{
			if (str.Length > 128)
				return false;

			bool[] char_set = new bool[128];
			for (int i = 0; i < str.Length; i++)
			{
				int val = str[i];
				if (char_set[val])
				{
					return false;
				}
				char_set[val] = true;
			}
			return true;
		}
	}
}
