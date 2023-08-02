

export const shortDescription = (text) => {
    const spaceIndex = text.lastIndexOf(" ", 160)
   
   const shortString = text.substring(0, spaceIndex) + "..."
   return shortString


}
