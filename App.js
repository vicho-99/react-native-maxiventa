
import { NavigationContainer } from '@react-navigation/native';
import { RecaptchaProvider } from './src/context/recaptcha';
import { OrgProvider } from './src/context/org';
import { AuthProvider } from './src/context/auth';
import { ClientProvider } from './src/context/client';
import { PriceListProvider } from './src/context/priceList';
import { ProductProvider } from './src/context/product';
import ReCaptchar from './src/components/ReCaptchar';
import MainNavigator from './src/navigation/MainNavigator';
export default function App() {


  return (
    <RecaptchaProvider>
      <AuthProvider>
        <OrgProvider>
          <ClientProvider>
            <ProductProvider>
              <PriceListProvider>
                <NavigationContainer>
                  <ReCaptchar />
                  <MainNavigator />
                </NavigationContainer>
              </PriceListProvider>
            </ProductProvider>
          </ClientProvider>
        </OrgProvider>
      </AuthProvider>
    </RecaptchaProvider>
  );
}
