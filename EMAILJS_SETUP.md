# 📧 Configuration EmailJS

Ce guide vous explique comment configurer EmailJS pour que le formulaire de contact fonctionne.

## 🎯 Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" (inscription gratuite)
3. Vérifiez votre email

### 2. Créer un Service Email

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre provider (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Notez le **Service ID** (ex: `service_abc123`)

### 3. Créer un Template

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

```
Subject: Nouveau message de {{from_name}}

De: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}
```

4. Notez le **Template ID** (ex: `template_xyz789`)

### 4. Récupérer votre Public Key

1. Allez dans **"Account" > "General"**
2. Trouvez votre **Public Key** (ex: `pQr1St2Uv3Wx4Yz5`)

### 5. Configurer les variables d'environnement

1. Créez un fichier `.env` à la racine du projet :

```bash
cp .env.example .env
```

2. Remplissez avec vos identifiants :

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=pQr1St2Uv3Wx4Yz5
```

### 6. Testez !

1. Redémarrez le serveur de développement
2. Allez sur la section Contact
3. Envoyez un message de test
4. Vérifiez votre boîte email

## ✅ Vérifications

- [ ] Service Email créé et connecté
- [ ] Template créé avec les bons champs
- [ ] Public Key récupérée
- [ ] Fichier `.env` créé et rempli
- [ ] Test du formulaire réussi

## 🔒 Sécurité

- Ne commitez JAMAIS le fichier `.env`
- Pour Vercel, ajoutez les variables dans **Settings > Environment Variables**

## 🎉 C'est fait !

Votre formulaire de contact est maintenant fonctionnel et enverra les messages directement dans votre boîte email !
