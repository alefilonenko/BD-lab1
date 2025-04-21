# Розроблення функціональних вимог до системи

## Модель прецедентів

### Загальна схема

@startuml
left to right direction
skinparam packageStyle rectangle
skinparam usecase {
  BackgroundColor White
  BorderColor Black
  ArrowColor Gray
  FontSize 12
}

actor "Користувач" as User
actor "Адміністратор" as Admin
User <|-- Admin : "розширення прав"

' ------------------- Use Case Groups -------------------

package "Реєстрація та Аутентифікація" {
  usecase "AuthAccess\n(Доступ до системи)" as UC_AuthAccess

  usecase "UserSignUp\n(Створення облікового запису)" as UC_SignUp
  usecase "UserSignIn\n(Вхід у систему)" as UC_SignIn
  usecase "UserPasswordReset\n(Відновлення паролю)" as UC_Reset

  UC_AuthAccess --> UC_SignUp : <<include>>
  UC_AuthAccess --> UC_SignIn : <<include>>
  UC_AuthAccess --> UC_Reset : <<include>>
}

package "Керування Користувачами" {
  usecase "UserManagement\n(Управління користувачами)" as UC_UserMgmt

  usecase "UserUpgradeRole\n(Зміна рівня доступу)" as UC_Upgrade
  usecase "UserRemove\n(Деактивація користувача)" as UC_Remove
  usecase "UserProfileUpdate\n(Оновлення профілю)" as UC_Profile

  UC_UserMgmt --> UC_Upgrade : <<include>>
  UC_UserMgmt --> UC_Remove : <<include>>
  UC_UserMgmt --> UC_Profile : <<include>>
}

package "Контент-менеджмент" {
  usecase "ContentHub\n(Робота з контентом)" as UC_ContentHub

  usecase "ContentCreate\n(Додати контент)" as UC_ContentCreate
  usecase "ContentEdit\n(Редагувати контент)" as UC_ContentEdit
  usecase "ContentDelete\n(Видалити контент)" as UC_ContentDelete
  usecase "ContentSearch\n(Пошук контенту)" as UC_ContentSearch

  UC_ContentHub --> UC_ContentCreate : <<include>>
  UC_ContentHub --> UC_ContentEdit : <<include>>
  UC_ContentHub --> UC_ContentDelete : <<include>>
  UC_ContentHub --> UC_ContentSearch : <<include>>
}

package "Медіа-аналітика" {
  usecase "MediaAnalytics\n(Аналіз медіа)" as UC_MediaHub

  usecase "MediaMonitor01\n(Виявлення фейкових новин)" as UC_MediaFake
  usecase "MediaMonitor02\n(Моніторинг негативних згадок)" as UC_MediaNeg
  usecase "MediaMonitor03\n(Рівень зацікавленості аудиторії)" as UC_MediaEngage
  usecase "MediaMonitor04\n(Першоджерело контенту)" as UC_MediaSource
  usecase "MediaMonitor05\n(Тенденції поширення контенту)" as UC_MediaTrends

  UC_MediaHub --> UC_MediaFake : <<include>>
  UC_MediaHub --> UC_MediaNeg : <<include>>
  UC_MediaHub --> UC_MediaEngage : <<include>>
  UC_MediaHub --> UC_MediaSource : <<include>>
  UC_MediaHub --> UC_MediaTrends : <<include>>
}

' ------------------- Actors associations -------------------

User --> UC_AuthAccess
User --> UC_ContentHub
User --> UC_MediaHub

Admin --> UC_UserMgmt

@enduml

### Користувач

@startuml
left to right direction
skinparam packageStyle rectangle
skinparam usecase {
  BackgroundColor White
  BorderColor Black
  ArrowColor Gray
  FontSize 12
}

actor "Користувач" as User

' ------------------- Use Case Groups -------------------

package "Реєстрація та Аутентифікація" {
  usecase "AuthAccess\n(Доступ до системи)" as UC_AuthAccess

  usecase "UserSignUp\n(Створення облікового запису)" as UC_SignUp
  usecase "UserSignIn\n(Вхід у систему)" as UC_SignIn
  usecase "UserPasswordReset\n(Відновлення паролю)" as UC_Reset

  UC_AuthAccess --> UC_SignUp : <<include>>
  UC_AuthAccess --> UC_SignIn : <<include>>
  UC_AuthAccess --> UC_Reset : <<include>>
}

package "Контент-менеджмент" {
  usecase "ContentHub\n(Робота з контентом)" as UC_ContentHub

  usecase "ContentCreate\n(Додати контент)" as UC_ContentCreate
  usecase "ContentEdit\n(Редагувати контент)" as UC_ContentEdit
  usecase "ContentDelete\n(Видалити контент)" as UC_ContentDelete
  usecase "ContentSearch\n(Пошук контенту)" as UC_ContentSearch

  UC_ContentHub --> UC_ContentCreate : <<include>>
  UC_ContentHub --> UC_ContentEdit : <<include>>
  UC_ContentHub --> UC_ContentDelete : <<include>>
  UC_ContentHub --> UC_ContentSearch : <<include>>
}

package "Медіа-аналітика" {
  usecase "MediaAnalytics\n(Аналіз медіа)" as UC_MediaHub

  usecase "MediaMonitor01\n(Виявлення фейкових новин)" as UC_MediaFake
  usecase "MediaMonitor02\n(Моніторинг негативних згадок)" as UC_MediaNeg
  usecase "MediaMonitor03\n(Рівень зацікавленості аудиторії)" as UC_MediaEngage
  usecase "MediaMonitor04\n(Першоджерело контенту)" as UC_MediaSource
  usecase "MediaMonitor05\n(Тенденції поширення контенту)" as UC_MediaTrends

  UC_MediaHub --> UC_MediaFake : <<include>>
  UC_MediaHub --> UC_MediaNeg : <<include>>
  UC_MediaHub --> UC_MediaEngage : <<include>>
  UC_MediaHub --> UC_MediaSource : <<include>>
  UC_MediaHub --> UC_MediaTrends : <<include>>
}

' ------------------- Actors associations -------------------

User --> UC_AuthAccess
User --> UC_ContentHub
User --> UC_MediaHub

@enduml

### Адміністратор
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam usecase {
  BackgroundColor White
  BorderColor Black
  ArrowColor Gray
  FontSize 12
}

actor "Користувач" as User
actor "Адміністратор" as Admin
User <|-- Admin : "розширення прав"

' ------------------- Use Case Groups -------------------


package "Керування Користувачами" {
  usecase "UserManagement\n(Управління користувачами)" as UC_UserMgmt

  usecase "UserUpgradeRole\n(Зміна рівня доступу)" as UC_Upgrade
  usecase "UserRemove\n(Деактивація користувача)" as UC_Remove
  usecase "UserProfileUpdate\n(Оновлення профілю)" as UC_Profile

  UC_UserMgmt --> UC_Upgrade : <<include>>
  UC_UserMgmt --> UC_Remove : <<include>>
  UC_UserMgmt --> UC_Profile : <<include>>
}


' ------------------- Actors associations -------------------

Admin --> UC_UserMgmt

@enduml


# Сценарії використання

## Сценарій: Створення нового облікового запису (UserSignUp)

| ID:                | `UserSignUp` |
|:-------------------|:-------------|
| **Назва:**         | Створення нового облікового запису |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач ще не має облікового запису |
| **Результат:**     | Користувач успішно зареєстрований |
| **Виключні ситуації:** | - Введені некоректні дані → `InvalidInputException`<br>- Не заповнені обов’язкові поля → `MissingDataException`<br>- Вказана пошта вже використовується → `DuplicateAccountException` |
| **Основний сценарій:** | 1. Користувач відкриває форму реєстрації.<br>2. Вносить особисті дані (ім’я, email, пароль тощо).<br>3. Система перевіряє коректність введених даних.<br>4. Система перевіряє, чи така пошта вже зареєстрована.<br>5. Якщо все гаразд, система створює обліковий запис.<br>6. Користувач отримує підтвердження про успішну реєстрацію. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Користувач
participant "Форма реєстрації" as SignUpForm
participant "Система" as System
database "База даних" as DB

Користувач -> SignUpForm : Відкриває форму реєстрації
SignUpForm -> System : Відправка введених даних
System -> DB : Перевірка наявності email
alt Якщо пошта не використовується
    System -> DB : Створити обліковий запис
    DB --> System : Успішно збережено
    System --> SignUpForm : Підтвердження реєстрації
else Якщо пошта вже зареєстрована
    System --> SignUpForm : Повідомлення про помилку
end
@enduml


</details>

---

## Сценарій: Вхід у систему (UserSignIn)

| ID:                | `UserSignIn` |
|:-------------------|:-------------|
| **Назва:**         | Вхід у систему |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач має активний акаунт |
| **Результат:**     | Користувач успішно авторизований |
| **Виключні ситуації:** | - Невірний пароль → `IncorrectPasswordException`<br>- Обліковий запис не знайдено → `AccountNotFoundException`<br>- Перевищено кількість невдалих спроб → `TooManyLoginAttemptsException` |
| **Основний сценарій:** | 1. Користувач відкриває сторінку входу.<br>2. Вводить email і пароль.<br>3. Система перевіряє відповідність даних.<br>4. Якщо вони правильні, користувач отримує доступ.<br>5. Система повідомляє про успішний вхід. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Користувач
participant "Сторінка входу" as SignInPage
participant "Система" as System
database "База даних" as DB

Користувач -> SignInPage : Вводить email і пароль
SignInPage -> System : Запит на вхід
System -> DB : Перевірка правильності даних
alt Дані правильні
    System --> SignInPage : Успішний вхід
else Невірні дані
    System --> SignInPage : Повідомлення про помилку
end
@enduml


</details>

---

## Сценарій: Зміна рівня доступу користувача (UserUpgradeRole)

| ID:                | `UserUpgradeRole` |
|:-------------------|:------------------|
| **Назва:**         | Зміна рівня доступу користувача |
| **Учасники:**      | Адміністратор, Система |
| **Передумови:**    | Адміністратор має право змінювати ролі |
| **Результат:**     | Користувач отримує новий рівень доступу |
| **Виключні ситуації:** | - Недостатньо прав у адміністратора → `AccessDeniedException`<br>- Користувач не існує → `UserNotFoundException`<br>- Користувач вже має найвищу можливу роль → `RoleLimitReachedException` |
| **Основний сценарій:** | 1. Адміністратор вибирає користувача для зміни ролі.<br>2. Обирає новий рівень доступу.<br>3. Система перевіряє можливість зміни.<br>4. Якщо все добре, новий статус збережено.<br>5. Користувач отримує повідомлення про оновлення ролі. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Адміністратор
participant "Система" as System
database "База даних" as DB

Адміністратор -> System : Вибір користувача
System -> DB : Перевірка прав
alt Якщо є доступ
    System -> DB : Оновити роль
    DB --> System : Успіх
    System --> Адміністратор : Підтвердження зміни ролі
else Якщо немає доступу
    System --> Адміністратор : Повідомлення про помилку
end
@enduml

</details>

---

## Сценарій: Оновлення профілю користувача (UserProfileUpdate)

| ID:                | `UserProfileUpdate` |
|:-------------------|:--------------------|
| **Назва:**         | Оновлення профілю користувача |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач авторизований у системі |
| **Результат:**     | Змінені особисті дані профілю |
| **Виключні ситуації:** | - Некоректні введені дані → `InvalidProfileDataException`<br>- Спроба змінити дані іншого користувача → `PermissionDeniedException` |
| **Основний сценарій:** | 1. Користувач переходить у розділ “Профіль”.<br>2. Вносить зміни (ім’я, прізвище, фото, мову інтерфейсу тощо).<br>3. Система перевіряє дані.<br>4. Система зберігає оновлення.<br>5. Система сповіщає про успішне оновлення. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Користувач
participant "Система" as System
database "База даних" as DB

Користувач -> System : Вибір розділу профілю
System -> DB : Перевірка даних
alt Дані коректні
    System -> DB : Оновити профіль
    DB --> System : Успіх
    System --> Користувач : Підтвердження оновлення
else Некоректні дані
    System --> Користувач : Повідомлення про помилку
end
@enduml

</details>

---

## Сценарій: Відновлення паролю (UserPasswordReset)

| ID:                | `UserPasswordReset` |
|:-------------------|:--------------------|
| **Назва:**         | Відновлення паролю |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач зареєстрований у системі |
| **Результат:**     | Новий пароль встановлено |
| **Виключні ситуації:** | - Email не зареєстровано → `EmailNotFoundException`<br>- Токен скидання недійсний → `TokenInvalidException` |
| **Основний сценарій:** | 1. Користувач відкриває форму відновлення паролю.<br>2. Вводить свою email-адресу.<br>3. Система надсилає лист з токеном.<br>4. Користувач відкриває посилання з листа.<br>5. Вводить новий пароль.<br>6. Система змінює пароль та повідомляє про успіх. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Користувач
participant "Форма відновлення паролю" as ResetForm
participant "Система" as System
participant "Email-система" as EmailSystem

Користувач -> ResetForm : Введення email
ResetForm -> System : Запит на відновлення паролю
System -> EmailSystem : Надіслати токен
EmailSystem -> Користувач : Лист з токеном
Користувач -> ResetForm : Введення нового паролю
ResetForm -> System : Запит на зміну
System -> System : Зміна паролю
System --> Користувач : Підтвердження успішного відновлення
@enduml

</details>

---

### Сценарій: Деактивація користувача (UserRemove)

| ID:                | `UserRemove` |
|:-------------------|:------------|
| **Назва:**         | Деактивація користувача |
| **Учасники:**      | Адміністратор, Користувач, Система |
| **Передумови:**    | Користувач має акаунт у системі |
| **Результат:**     | Обліковий запис заблоковано або видалено |
| **Виключні ситуації:** | - Недостатньо прав — `AccessDeniedException`<br>- Користувач не знайдений — `UserNotFoundException` |
| **Основний сценарій:** | 1. Адміністратор відкриває список користувачів.<br>2. Обирає того, кого потрібно видалити.<br>3. Система перевіряє права доступу.<br>4. Система деактивує акаунт або видаляє його.<br>5. Адміністратор отримує підтвердження про успішне видалення. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Адміністратор
participant "Система" as System
database "База даних" as DB

Адміністратор -> System : Відкрити список користувачів
System -> DB : Отримати список користувачів
DB --> System : Список користувачів
Адміністратор -> System : Обрати користувача для видалення
System -> DB : Перевірити права доступу
alt Доступ дозволено
    System -> DB : Деактивувати або видалити користувача
    DB --> System : OK
    System --> Адміністратор : Підтвердження успішного видалення
else Доступ заборонено
    System --> Адміністратор : Повідомлення про помилку
end
@enduml

</details>

### Сценарій: Додавання нового матеріалу (ContentCreate)

| ID:                | `ContentCreate` |
|:-------------------|:----------------|
| **Назва:**         | Додавання нового матеріалу |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач має права на публікацію |
| **Результат:**     | Новий матеріал збережено у базі |
| **Виключні ситуації:** | - Користувач не має прав на створення контенту — `PermissionDeniedException`<br>- Контент не відповідає вимогам — `InvalidContentException` |
| **Основний сценарій:** | 1. Користувач обирає опцію додати матеріал.<br>2. Заповнює форму: заголовок, опис, файл.<br>3. Система перевіряє відповідність вимогам.<br>4. Якщо все добре, матеріал збережено.<br>5. Користувач отримує повідомлення про успішне створення. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Користувач
participant "Система" as System
database "База даних" as DB

Користувач -> System : Обрати опцію додавання матеріалу
System -> Користувач : Показати форму для заповнення
Користувач -> System : Заповнити форму
System -> System : Перевірити відповідність вимогам
alt Дані валідні
    System -> DB : Зберегти матеріал
    DB --> System : OK
    System --> Користувач : Підтвердження успішного створення
else Невалідний контент
    System --> Користувач : Повідомлення про помилку
end
@enduml

</details>

### Сценарій: Пошук матеріалу (ContentSearch)

| ID:                | `ContentSearch` |
|:-------------------|:----------------|
| **Назва:**         | Пошук матеріалу |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач має доступ до контенту |
| **Результат:**     | Відображено список відповідних матеріалів |
| **Виключні ситуації:** | - Нічого не знайдено — `NoResultsFoundException`<br>- Некоректний запит — `InvalidQueryException` |
| **Основний сценарій:** | 1. Користувач відкриває пошуковий розділ.<br>2. Вводить ключові слова або фільтри.<br>3. Система аналізує запит і шукає відповідні матеріали.<br>4. Відображає знайдені результати. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Користувач
participant "Система" as System
database "База даних" as DB

Користувач -> System : Відкрити пошуковий розділ
System -> System : Аналізувати запит
System -> DB : Пошук за ключовими словами
DB --> System : Знайдені матеріали
System --> Користувач : Відобразити результати
@enduml

</details>

### Сценарій: Редагування матеріалу (ContentEdit)

| ID:                | `ContentEdit` |
|:-------------------|:--------------|
| **Назва:**         | Редагування матеріалу |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач є автором контенту |
| **Результат:**     | Матеріал оновлено |
| **Виключні ситуації:** | - Немає прав на редагування — `PermissionDeniedException`<br>- Контент не знайдено — `ContentNotFoundException` |
| **Основний сценарій:** | 1. Користувач відкриває список своїх матеріалів.<br>2. Обирає потрібний і натискає “Редагувати”.<br>3. Вносить зміни та зберігає оновлення.<br>4. Система оновлює інформацію у базі. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor Користувач
participant "Система" as System
database "База даних" as DB

Користувач -> System : Відкрити список матеріалів
System -> DB : Отримати список
DB --> System : Список матеріалів
Користувач -> System : Обрати матеріал для редагування
System -> DB : Перевірка прав
alt Якщо є доступ
    System -> System : Показати форму редагування
    Користувач -> System: Внести зміни
    System -> DB : Оновити інформацію
    DB --> System : OK
    System --> Користувач : Підтвердження успішного редагування
else Прав немає
    System --> Користувач : Повідомлення про помилку
end
@enduml

</details>

### Сценарій: Видалення матеріалу (ContentDelete)

| ID:                | `ContentDelete` |
|:-------------------|:--------------|
| **Назва:**         | Видалення матеріалу |
| **Учасники:**      | Користувач, Система |
| **Передумови:**    | Користувач має права на видалення |
| **Результат:**     | Матеріал видалено |
| **Виключні ситуації:** | - Відсутність прав  — `PermissionDeniedException`<br>- Контент не знайдено — `ContentNotFoundException` |
| **Основний сценарій:** | 1. Користувач обирає матеріал зі списку.<br>2. Натискає “Видалити”.<br>3. Система перевіряє можливість видалення.<br>4. Контент видалено з бази. |

<details>
<summary>📊 Діаграма (натисніть, щоб розгорнути)</summary>

@startuml
actor "Користувач" as User
participant "Система" as System
database "База даних" as DB

User -> System : Обирає матеріал зі списку
System -> DB : Перевірка прав
alt Якщо є доступ
    System -> DB : Перевірка існування матеріалу
    alt Матеріал існує
        System -> DB : Видалення матеріалу
        DB --> System : успіх
        System --> User : Підтвердження видалення
    else Матеріал не знайдено
        System --> User : Повідомлення про помилку
    end
else Прав немає
    System --> User : Повідомлення про помилку
end
@enduml

</details>

</center>

