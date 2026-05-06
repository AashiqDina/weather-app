import { useEffect, useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import styles from './HeaderStyles'
import LocationIcon from '../../../assets/Location.svg';
import SearchIcon from '../../../assets/Search.svg'
import CrossIcon from '../../../assets/Cross.svg'
import { getFormattedDate } from "../../utils/getFormattedDate";
import fetchSuggestions from "../../api/fetchSuggestions";
import { locationData } from "../../types/types";

type props = {
    location: string | undefined,
    handleLocationSelection: (suggestion: locationData) => void
}

export default function Header({location, handleLocationSelection}: props){

    const [visibleSearch, setVisibleSearch] = useState<boolean>(false)
    const [input, setInput] = useState<string>("")
    const [suggestions, setSuggestions] = useState<locationData[]>([])

    useEffect(() => {
        if(input.length < 2){
            setSuggestions([])
            return
        }

        const timeout = setTimeout(async () => {
            const data = await fetchSuggestions(input, 5);
            setSuggestions(data ?? [])
        }, 300);

        return () => clearTimeout(timeout);

    }, [input])

    const handleRightButton = () => {
        if(visibleSearch){
            setInput("");
            setSuggestions([])
        }
        setVisibleSearch(prev => !prev)
    }

    const handleSearch = (data: locationData) => {
        handleLocationSelection(data)
        setInput("")
        setSuggestions([])
        setVisibleSearch(false)
    }

    return (
        <>
            <View style={styles.Header}>
                <View style={styles.HeaderLeft}>
                    {
                        visibleSearch ? 
                            <TextInput style={styles.SearchInput} placeholder="Search for a location" placeholderTextColor={'#1a1a1a'} onChangeText={(text) => {setInput(text)}} value={input}/>
                        :
                        <>
                            <View style={styles.LocationSection}>
                                <LocationIcon width={18} height={18}/>
                                <Text style={styles.LocationText}>{location}</Text>
                            </View>
                            <View style={styles.DateSection}>
                                <Text style={styles.DateText}>{getFormattedDate()}</Text>
                            </View>
                        </>
                    }
                </View>
                <View style={styles.HeaderRight}>
                    <Pressable onPress={() => {handleRightButton()}}>
                        { visibleSearch ? <CrossIcon width={25} height={25}/> : <SearchIcon width={30} height={30}/> }
                    </Pressable>
                </View>
            </View>
            {input.length > 0 && visibleSearch && <View style={styles.SuggestionContainer}>
                {suggestions.map((suggestion: locationData, index: number) => {
                    return (
                        <Pressable key={suggestion.id} style={styles.Suggestion} onPress={() => {handleSearch(suggestion)}}>
                            <Text style={styles.SuggestionText}>{suggestion.name}</Text>
                        </Pressable>
                    )
                })}
            </View>}
        </>
        
    )
}