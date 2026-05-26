import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { qcmData } from './qcm-data';

// Helper function to build 60 questions from our pool of 20
const build60Questions = () => {
  const fullList = [];
  for (let i = 0; i < 3; i++) {
    qcmData.forEach((q) => {
      fullList.push({
        ...q,
        id: fullList.length + 1, // Override ID 1 to 60
      });
    });
  }
  return fullList;
};

const fullQCMList = build60Questions();

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#9e9e9e',
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    color: '#003366',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#003366',
    fontSize: 12,
  },
  logo: {
    width: 60,
    height: 60,
  },
  qContainer: {
    marginBottom: 20,
    marginTop: 10,
    breakInside: 'avoid',
  },
  questionHeader: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  questionNumber: {
    color: '#003366',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 4,
  },
  questionText: {
    color: '#003366',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
    lineHeight: 1.4,
  },
  vignetteBox: {
    backgroundColor: '#ffffe0',
    padding: 6,
    marginBottom: 8,
  },
  vignetteText: {
    color: '#666600',
    fontSize: 11,
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
  optionLine: {
    flexDirection: 'row',
    marginBottom: 4,
    marginLeft: 15,
  },
  optionLetter: {
    fontSize: 11,
    fontWeight: 'bold',
    marginRight: 6,
    color: '#000000',
  },
  optionText: {
    fontSize: 11,
    color: '#000000',
    flex: 1,
    lineHeight: 1.4,
  },
  answerLine: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 15,
  },
  answerText: {
    color: '#2e7d32',
    fontSize: 11,
    fontWeight: 'bold',
  },
  explanationBox: {
    borderWidth: 1,
    borderColor: '#b2dfdb',
    backgroundColor: '#f1f8e9',
    padding: 8,
    marginTop: 4,
    marginLeft: 15,
  },
  explanationTitle: {
    color: '#2e7d32',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  explanationItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  explanationLetter: {
    color: '#2e7d32',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 4,
  },
  explanationBody: {
    color: '#2e7d32',
    fontSize: 10,
    flex: 1,
    textAlign: 'justify',
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#9e9e9e',
    paddingTop: 8,
  },
  footerText: {
    fontSize: 9,
    color: '#757575',
  },
});

// Using a generic medical caduceus placeholder as data URI
const logoUri = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23003366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-6M12 8V2M15 11l-3-3-3 3M19 17l-3-3-4 4-4-4-3 3"/></svg>';

const dentalLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";

export const QcmPdfDocument = () => (
  <Document title="Examen de Médecine Dentaire - QCM Corrigés">
    {/* Calculate number of chunks if we wanted to chunk pages manually, but react-pdf auto pages */}
    <Page size="A4" style={styles.page} wrap>
      {/* HEADER - Fixed at top of the document (not repeated every page for now, or we can use fixed prop) */}
      <View style={styles.headerBox} fixed>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>TITRE : QCM — Anatomie Cervico-Faciale</Text>
          <Text style={styles.subtitle}>SOUS-TITRE : Niveau Examen Médecine Dentaire</Text>
        </View>
        <Image src={dentalLogo} style={styles.logo} />
      </View>

      {/* QUESTIONS */}
      {fullQCMList.map((qcm) => {
        // Collect letters of correct answers
        const correctLetters = qcm.options
          .filter((o) => o.isCorrect)
          .map((o) => o.letter)
          .join(', ');

        return (
          <View key={qcm.id} style={styles.qContainer}>
            {/* Vignette if exists */}
            {qcm.vignette && (
              <View style={styles.vignetteBox}>
                <Text style={styles.vignetteText}>{qcm.vignette}</Text>
              </View>
            )}

            {/* Question */}
            <View style={styles.questionHeader}>
              <Text style={styles.questionNumber}>{qcm.id}.</Text>
              <Text style={styles.questionText}>{qcm.question}</Text>
            </View>

            {/* Options */}
            {qcm.options.map((opt) => (
              <View key={opt.letter} style={styles.optionLine}>
                <Text style={styles.optionLetter}>{opt.letter}.</Text>
                <Text style={styles.optionText}>{opt.text}</Text>
              </View>
            ))}

            {/* Answer */}
            <View style={styles.answerLine}>
              <Text style={styles.answerText}>Réponse : {correctLetters}</Text>
            </View>

            {/* Explanation box */}
            <View style={styles.explanationBox}>
              <Text style={styles.explanationTitle}>Explication :</Text>
              {qcm.options.map((opt) => (
                <View key={opt.letter} style={styles.explanationItem}>
                  <Text style={styles.explanationLetter}>{"> "}{opt.letter} :</Text>
                  <Text style={styles.explanationBody}>{opt.justification}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}

      {/* FOOTER */}
      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>Faculté de Médecine Dentaire - Examen QCM Officiel</Text>
        <Text style={styles.footerText} render={({ pageNumber, totalPages }) => `Page ${pageNumber} / ${totalPages}`} />
      </View>
    </Page>
  </Document>
);
