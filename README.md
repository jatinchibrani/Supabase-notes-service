# 📝 Supabase Notes Service

This project is a minimal backend service for storing and retrieving personal notes using Supabase. It includes:

- A PostgreSQL table schema for storing notes
- Two Supabase Edge Functions:
  - `post_notes.ts` — to insert a new note (POST /notes)
  - `get_notes.ts` — to retrieve all notes for the authenticated user (GET /notes)

---

## 🛠️ Setup Instructions

### 1. Supabase Project

- Create a new Supabase project at [https://app.supabase.com](https://app.supabase.com)
- Go to "SQL Editor" and run `schema.sql` to create the table
- Enable Edge Functions in your project settings

### 2. Environment Variables

In your `.env` file (or directly in the Supabase dashboard if using browser deploy):

```env
REACT_APP_SUPABASE_URL=https://fjkvpzrhsqyuopspcybz.supabase.co
REACT_APP_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqa3ZwenJoc3F5dW9wc3BjeWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5OTMzOTIsImV4cCI6MjA2MTU2OTM5Mn0.cFmdiEdl-CNg12uTuZ4vg-3p3rTV1frC0sKFmZOk_Rs
REACT_APP_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqa3ZwenJoc3F5dW9wc3BjeWJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTk5MzM5MiwiZXhwIjoyMDYxNTY5MzkyfQ.LFi1oUYfRmSXDi2NBtCUjX-EbVsHPMb8p4arNCzj1PI



cURLS for GET:
curl -L -X POST 'https://fjkvpzrhsqyuopspcybz.supabase.co/functions/v1/get-notes' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqa3ZwenJoc3F5dW9wc3BjeWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5OTMzOTIsImV4cCI6MjA2MTU2OTM5Mn0.cFmdiEdl-CNg12uTuZ4vg-3p3rTV1frC0sKFmZOk_Rs' \
  -H 'Content-Type: application/json' \
  --data '{"name":"Functions"}'

cURLS for POST:
curl -L -X POST 'https://fjkvpzrhsqyuopspcybz.supabase.co/functions/v1/insert-note' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqa3ZwenJoc3F5dW9wc3BjeWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5OTMzOTIsImV4cCI6MjA2MTU2OTM5Mn0.cFmdiEdl-CNg12uTuZ4vg-3p3rTV1frC0sKFmZOk_Rs' \
  -H 'Content-Type: application/json' \
  --data 'body: {
            "title": 'Test Note from JS',
            "content": 'This note was created using a test script!',
          },'

Easy JS to execute too for GET:

 const { data, error } = await supabase.functions.invoke('get-notes', {
           body: { name: 'Functions' },
         })
Easy JS to execute too for POST:

  const { data, error } = await supabase.functions.invoke('insert-note', {
          body: {
            title: 'Test Note from JS',
            content: 'This note was created using a test script!',
          },
        });

```
![Image](https://github.com/user-attachments/assets/dcbf2a8b-36c2-4714-a4b8-8c726c07348c)
Image of insert function
![image](https://github.com/user-attachments/assets/9c9520cc-e042-4aed-ac6a-2f2b28b65abd)
Sample Notes Table
![image](https://github.com/user-attachments/assets/b5d1b891-7294-45e5-9ab4-8107a026913a)
Get Function


# Supabase-notes-service
