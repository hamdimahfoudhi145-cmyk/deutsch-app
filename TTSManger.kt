package com.deutsch.app.utils

import android.content.Context
import android.speech.tts.TextToSpeech
import android.widget.Toast
import java.util.Locale

class TTSManager(private val context: Context) : TextToSpeech.OnInitListener {
    private var tts: TextToSpeech? = TextToSpeech(context, this)
    private var isReady = false

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            val result = tts?.setLanguage(Locale.GERMANY)
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                Toast.makeText(context, "اللغة الألمانية غير منصّبة في محرك الصوت بالتلفون", Toast.LENGTH_LONG).show()
            } else {
                isReady = true
            }
        } else {
            Toast.makeText(context, "فشل تهيئة محرك الصوت", Toast.LENGTH_SHORT).show()
        }
    }

    fun speak(text: String) {
        if (isReady) {
            tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, null)
        } else {
            Toast.makeText(context, "جاري تحضير محرك الصوت الألماني...", Toast.LENGTH_SHORT).show()
        }
    }

    fun stop() {
        tts?.stop()
    }

    fun shutdown() {
        tts?.shutdown()
    }
}
