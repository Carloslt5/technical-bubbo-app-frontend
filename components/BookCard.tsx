import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { type Book } from '../types/book.type'
import StyledText from '../styles/StyledText'
import StyledCard from '../styles/StyledCard'
import { Link } from 'expo-router'
import StyledButton from '../styles/StyledButton'

const BookCard = ({ id, title, author, imageLink }: Book) => {
  return (
    <StyledCard>
      <View style={styles.bodyContainer}>
        <View>
          <Image
            source={{ uri: imageLink }}
            style={styles.image}
            resizeMode='center'
          />
        </View>

        <View style={styles.detailsContainer}>
          <View>
            <StyledText
              fontSize='subheading'
              fontWeight='bold'
            >
              {title}
            </StyledText>
            <StyledText>{author}</StyledText>
          </View>
          <StyledButton button='primary'>
            <Link
              href={`/gallery/${id}`}
              key={id}
            >
              View details...
            </Link>
          </StyledButton>
        </View>
      </View>
    </StyledCard>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 150,
  },
})

export default BookCard
