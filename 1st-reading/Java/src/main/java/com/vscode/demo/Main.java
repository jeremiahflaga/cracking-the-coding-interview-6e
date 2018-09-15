package com.vscode.demo;

import com.jboy.ch1_arrays_and_strings.Q01_01_is_unique_chars;

import java.util.Objects;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello VS Code!");

        Stream.of("React", "Angular", "Vue")
            .filter(x -> Objects.equals(x, "React"))
            .forEach(System.out::println);

        String[] words = {"abcde", "hello", "apple", "kite", "padle"};
        for (String word : words) {
            System.out.println(word + ": " + Q01_01_is_unique_chars.isUniqueChars(word));
        }
    }

}