import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import queryFetch from "./Query";

export default function Orders() {
  const [text, setText] = useState("start");
  const [result, setRes] = useState("test");
  useEffect(() => {
    queryFetch(`
      {
        ping {
          pong
        }
      }
    `).then((res) => setRes(res));

    setText("done");
  }, []);

  return (
    <View>
      <Text>
        Here is text: {text} {result}
      </Text>
    </View>
  );
}
