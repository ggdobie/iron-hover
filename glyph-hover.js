const glyphParent = document.querySelector('.link-content')

function createGlyphs() {
	
	glyphContainer = document.createElement("div")
	glyphContainer.classList.add("glyph-container")
	glyphParent.appendChild(glyphContainer)

	for (i=1; i<5; i++) {		
		glyph = document.createElement("img")	
		imageString = "../glyphs/glyph-0" +i +".svg"
		
		glyphContainer.appendChild(glyph)	
		glyph.setAttribute("src", imageString)
		
		glyph.classList.add("glyph")
		glyph.classList.add("glyph-0" +i)
	}

}

createGlyphs()