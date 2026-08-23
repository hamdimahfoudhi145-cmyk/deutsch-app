package com.deutsch.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.deutsch.app.utils.TTSManager

sealed class Screen(val route: String, val title: String, val icon: String) {
    object Home : Screen("home", "الرئيسية", "🏠")
    object Lessons : Screen("lessons", "الدروس", "📚")
    object Exercises : Screen("exercises", "التمارين", "📝")
    object Reading : Screen("reading", "القراءة", "📖")
    object Tests : Screen("tests", "الاختبارات", "🧪")
}

class MainActivity : ComponentActivity() {
    private lateinit var ttsManager: TTSManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        ttsManager = TTSManager(this)

        setContent {
            MaterialTheme(colorScheme = darkColorScheme()) {
                // إجبار واجهة التطبيق كاملة على اتجاه اليمين إلى اليسار (RTL)
                CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
                    MainAppContent(ttsManager)
                }
            }
        }
    }

    override fun onDestroy() {
        ttsManager.shutdown()
        super.onDestroy()
    }
}

@Composable
fun MainAppContent(ttsManager: TTSManager) {
    val navController = rememberNavController()
    val items = listOf(
        Screen.Home,
        Screen.Lessons,
        Screen.Exercises,
        Screen.Reading,
        Screen.Tests
    )

    Scaffold(
        bottomBar = {
            NavigationBar {
                val currentRoute = navController.currentDestination?.route
                items.forEach { screen ->
                    NavigationBarItem(
                        icon = { Text(screen.icon) },
                        label = { Text(screen.title) },
                        selected = currentRoute == screen.route,
                        onClick = {
                            navController.navigate(screen.route) {
                                popUpTo(navController.graph.startDestinationId)
                                launchSingleTop = true
                            }
                        }
                    )
                }
            }
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Screen.Home.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            composable(Screen.Home.route) { HomeScreen(ttsManager) }
            composable(Screen.Lessons.route) { SimplePlaceholderScreen("📚 قسم الدروس (A1.1 - A2.2)") }
            composable(Screen.Exercises.route) { SimplePlaceholderScreen("📝 قسم التمارين (500 تمرين)") }
            composable(Screen.Reading.route) { SimplePlaceholderScreen("📖 قسم القراءة واستماع النصوص") }
            composable(Screen.Tests.route) { SimplePlaceholderScreen("🧪 قسم الاختبارات الشاملة") }
        }
    }
}

@Composable
fun HomeScreen(ttsManager: TTSManager) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text("تعلم اللغة الألمانية 🇩🇪", style = MaterialTheme.typography.headlineMedium)
        Spacer(modifier = Modifier.height(8.dp))
        Text("تعلم الألمانية من الصفر حتى مستوى A2", style = MaterialTheme.typography.bodyLarge)
        
        Spacer(modifier = Modifier.height(32.dp))
        
        Card(
            modifier = Modifier.fillMaxWidth(),
            elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text("جرب محرك الصوت الألماني 🔊:", style = MaterialTheme.typography.titleMedium)
                Spacer(modifier = Modifier.height(12.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("Guten Morgen", style = MaterialTheme.typography.bodyLarge)
                    Button(onClick = { ttsManager.speak("Guten Morgen") }) {
                        Text("🔊 استمع")
                    }
                }
            }
        }
    }
}

@Composable
fun SimplePlaceholderScreen(title: String) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(title, style = MaterialTheme.typography.headlineSmall)
    }
}
