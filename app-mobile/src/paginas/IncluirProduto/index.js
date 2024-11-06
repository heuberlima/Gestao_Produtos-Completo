import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import style from "./style";
import api from "../../services/api";

export default function IncluirProduto({ navigation }, props) {

    const [param_nome, setParam_nome] = useState(null);
    const [param_qtde, setParam_qtde] = useState(null);

    function incluirProduto() {

        const produto = {
            id: 0,
            nome: param_nome,
            quantidade: param_qtde
        }

        try {
            const response = api.post("/produtos", produto)
        } catch (error) {
            console.log("Erro ao incluir: " + error.message)
        }

        navigation.navigate("ListarProduto");
    }



    return (
        <View style={style.container}>
            <Text style={style.label}>Produto</Text>
            <TextInput
                style={style.input}
                type="text"
                placeholder="Nome do Produto"
                onChangeText={setParam_nome}
                value={param_nome}
            />

            <Text style={style.label}>Quantidade</Text>
            <TextInput
                style={style.input}
                type="text"
                keyboardType="numeric"
                placeholder="Informe a quantidade"
                onChangeText={setParam_qtde}
                value={param_qtde}
            />

            <TouchableOpacity style={style.buttonNewProduto} onPress={() => {
                incluirProduto()
            }}>
                <Text style={style.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )

}