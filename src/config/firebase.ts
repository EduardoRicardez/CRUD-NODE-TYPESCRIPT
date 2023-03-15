import * as admin from 'firebase-admin';

export function initializeFirestore(): void {
  const serviceAccount = require('../../path/to/serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export function getFirestore(): FirebaseFirestore.Firestore {
  return admin.firestore();
}