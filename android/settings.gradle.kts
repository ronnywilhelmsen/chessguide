pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\.android.*")
                includeGroupByRegex("com\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.name = "ChessGuideAndroid"

// Application
include(":app")

// Core modules
include(":core:model")
include(":core:mode")
include(":core:designsystem")

// Feature modules
include(":feature:mode-selection")
include(":feature:camera-setup")
include(":feature:scanner")
include(":feature:competition")
