import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';

const PrefernceChip = () => {

    const [pickedColor, setPickedColor] = useState("")

    const colorString = (length) => {
        let result = '';
        const characters = 'abcdef0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const genColor = () => {
        const x = "#" + colorString(6)
        var c = x.substring(1);
        var rgb = parseInt(c, 16);
        var r = (rgb >> 16) & 0xff;
        var g = (rgb >> 8) & 0xff;
        var b = (rgb >> 0) & 0xff;
        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (luma < 100) {
            setPickedColor(x)
        } else {
            genColor()
        }
    }

    useEffect(() => {
        genColor()
    }, [])


    return (
        <TouchableOpacity className="py-2 px-6 rounded-md" style={{ backgroundColor: pickedColor + "43" }}>
            <Text style={{ color: pickedColor }}>Prefernce</Text>
        </TouchableOpacity>
    )
}

export default PrefernceChip