|item swap itemCount hasChanged fact|

item := #(1, 5, -3, 7, -32, 8, 4, 90, 2, -4, 2, 0, -7).

swap :=
    [:indexOne :indexTwo |
	|temp|
	temp := item at: indexOne.
	item at: indexOne put: (item at: indexTwo).
	item at: indexTwo put: temp
	].

itemCount := item size.
[hasChanged := false.
itemCount := itemCount - 1.
1 to: itemCount do:
	[:index |
	(item at: index) > (item at: index + 1) ifTrue:
		[swap value: index value: index + 1.
		hasChanged := true]].
hasChanged] whileTrue.

1 to: item size do:
    [:index |
    (item at: index) printfInt.
].
