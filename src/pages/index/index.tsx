import React, { useEffect, useState } from "react"
import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import { Button, Cell, DatePicker, Toast } from "@nutui/nutui-react-taro"
import type CustomTabBar from "../../custom-tab-bar"

import "./index.scss"
import { PickerOption } from "@nutui/nutui-react-taro/dist/types/packages/picker/types"

function Index() {
  const [show1, setShow1] = useState(false)
  const [desc1, setDesc1] = useState("2012年 01月 01日")
  const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(" "))
  }

  return (
    <View className="nutui-react-demo">
      <View className="index">
        <Button type="primary">Welcome</Button>
      </View>

      <Cell title="显示中文" description={desc1} onClick={() => setShow1(true)} />
      <DatePicker title="日期选择" visible={show1} showChinese onClose={() => setShow1(false)} onConfirm={(options, values) => confirm1(values, options)} />
    </View>
  )
}

export default Index
