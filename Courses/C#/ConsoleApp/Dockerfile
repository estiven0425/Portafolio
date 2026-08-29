FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY ConsoleApp/ConsoleApp.csproj ConsoleApp/

RUN dotnet restore ConsoleApp/ConsoleApp.csproj

COPY ConsoleApp/ ConsoleApp/

RUN dotnet publish ConsoleApp/ConsoleApp.csproj \
    -c Release \
    -o /app/publish \
    --no-restore


FROM mcr.microsoft.com/dotnet/runtime:8.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "ConsoleApp.dll"]