import { Image, StyleSheet, View, Platform, Pressable, Linking } from 'react-native'
import React from 'react'
import { type Book } from '../types/book.type'
import MainContainer from '../styles/MainContainer'
import StyledCard from '../styles/StyledCard'
import StyledText from '../styles/StyledText'
import StyledButton from '../styles/StyledButton'
import theme from '../styles/theme'

const BooksDetails = ({
  id,
  author,
  country,
  language,
  link,
  pages,
  title,
  year,
  imageLink,
}: Book) => {
  const handleLinkPress = () => {
    Linking.openURL(link)
  }

  return (
    <View style={styles.view}>
      <MainContainer>
        <StyledCard>
          <Image
            source={{ uri: imageLink }}
            style={styles.image}
            resizeMode='center'
          />
          <View style={styles.details}>
            <View>
              <StyledText
                fontWeight='bold'
                fontSize='subheading'
              >
                {title}
              </StyledText>
              <StyledText>{author}</StyledText>
            </View>
            <View>
              <StyledText>Year: {year}</StyledText>
              <StyledText>Pages: {pages}</StyledText>
              <StyledText>Country: {country}</StyledText>
              <Pressable onPress={handleLinkPress}>
                <StyledText style={styles.link}>Link: {link}</StyledText>
              </Pressable>
            </View>
            <View style={styles.buttonBox}>
              <StyledButton button='edit'>
                <StyledText>Edit details</StyledText>
              </StyledButton>
              <StyledButton button='delete'>
                <StyledText>Delete Book</StyledText>
              </StyledButton>
            </View>
          </View>
        </StyledCard>
      </MainContainer>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    ...Platform.select({
      web: {
        marginTop: 10,
      },
    }),
  },
  image: {
    width: '50%',
    height: 300,
    marginHorizontal: 'auto',
    marginVertical: 10,
  },
  details: {
    gap: 10,
  },
  link: {
    color: theme.colors.blue500,
    textDecorationLine: 'underline',
  },
  buttonBox: {
    gap: 5,
  },
})

export default BooksDetails
