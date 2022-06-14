type Statement<I, O> = Statement1<I, O> |
    Statement2<I, O> |
    Statement3<I, O> |
    Statement4<I, O> |
    Statement5<I, O> |
    Statement6<I, O> |
    Statement7<I, O> |
    Statement8<I, O> |
    Statement9<I, O> |
    Statement10<I, O>

type Statement1<I, O> = [
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement2<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement3<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement4<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement5<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement6<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement7<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement8<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement9<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]

type Statement10<I, O> = [
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    value: I, execute: () => O,
    defaultValue?: () => O
]
