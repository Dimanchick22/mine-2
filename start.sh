#!/usr/bin/env sh
# Forge требует настроенные аргументы JVM и программы.
# Добавь пользовательские аргументы JVM в user_jvm_args.txt
# Програмные аргументы, такие как nogui, добавляй в следующей строке перед "$@" или передавай их непосредственно в этот скрипт
java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.19.2-43.4.0/unix_args.txt nogui "$@"
