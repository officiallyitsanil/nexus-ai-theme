import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Login - NexusAI';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        window.location.href = '/dashboard';
      } else {
        setError('Please enter both email and password');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-primary-500 p-2 text-white mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900">NexusAI</h2>
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-neutral-900">Welcome back</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Sign in to continue to your account
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          {error && (
            <div className="mb-4 bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                label="Email address"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                leftIcon={<Mail size={16} />}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="text-primary-600 hover:text-primary-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  leftIcon={<Lock size={16} />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
              </div>
            </div>

            <div>
              <Button type="submit" fullWidth isLoading={isLoading}>
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-neutral-50 text-neutral-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-neutral-300 rounded-md shadow-sm bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.0866 3.50977C14.0996 3.47796 15.9756 4.2763 17.4276 5.70928C17.0936 6.03548 16.7556 6.35688 16.4136 6.67988C15.4246 5.73368 14.1876 5.07609 12.8636 5.02289C10.8476 4.93448 8.95859 5.96588 7.83459 7.61329C7.61259 7.95989 7.42559 8.32629 7.27959 8.70929C5.96459 8.22329 4.64659 7.75129 3.33359 7.26528C3.97759 5.53708 5.16759 4.18608 6.72859 3.33889C8.38459 2.43728 10.2546 2.08408 12.0866 3.50977ZM3.50659 12.1073C3.54119 10.2843 4.25259 8.56248 5.53359 7.31088C6.87059 7.80129 8.20159 8.28029 9.53359 8.76629C9.38759 9.88109 9.61359 10.9719 10.1396 11.9323C10.2866 12.2255 10.4776 12.4955 10.6686 12.7591C9.93159 14.2331 9.19859 15.7051 8.46359 17.1771C6.88659 15.9047 3.48559 14.3663 3.50659 12.1073ZM12.0626 20.5553C10.0246 20.5905 8.12159 19.8429 6.65059 18.4641C7.34259 17.0519 8.03959 15.6421 8.73759 14.2319C10.2946 15.0539 12.1816 15.0559 13.6976 14.1151C14.0346 13.8919 14.3336 13.6215 14.6216 13.3479C15.1436 14.2539 15.6646 15.1599 16.1876 16.0639C14.9646 18.7919 13.9436 20.5239 12.0626 20.5553ZM16.5546 15.3307C16.0246 14.4247 15.4956 13.5187 14.9676 12.6117C15.0706 12.5379 15.1716 12.4627 15.2766 12.3935C16.6566 11.4307 17.4826 9.73848 17.3896 8.01689C17.3436 7.24088 17.1246 6.49048 16.7886 5.80707C17.1396 5.47008 17.4846 5.13148 17.8316 4.79288C19.3356 6.34568 20.1346 8.45149 20.0466 10.6375C20.0286 13.5275 18.4746 16.1587 16.1406 17.7283C16.2786 16.9291 16.4166 16.1291 16.5546 15.3307ZM12.0496 7.50068C13.1366 7.48627 14.1366 8.14747 14.5766 9.14528C15.0456 10.2207 14.7236 11.5267 13.8066 12.2499C12.5176 13.2659 10.6236 12.9071 9.76759 11.4679C8.88359 10.0223 9.56859 7.94288 11.2356 7.56987C11.5006 7.52387 11.7716 7.50247 12.0416 7.50068H12.0496Z"></path>
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-neutral-300 rounded-md shadow-sm bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22.0367422,12.0643995 C22.0367422,11.2040899 21.963825,10.3780088 21.8179905,9.57860766 L11.6367422,9.57860766 L11.6367422,13.8444022 L17.4248422,13.8444022 C17.1854278,15.1934356 16.4563014,16.338725 15.3751755,17.1219954 L15.3751755,19.8384968 L18.8177925,19.8384968 C20.8255636,17.9654932 22.0367422,15.2698918 22.0367422,12.0643995"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M11.6367422,22.9983719 C14.5200327,22.9983719 16.9310908,22.004821 18.8177925,19.8384968 L15.3751755,17.1219954 C14.4563592,17.7459877 13.2404079,18.1178551 11.6367422,18.1178551 C8.85538118,18.1178551 6.49225198,16.2293267 5.65983008,13.7146806 L2.11226474,13.7146806 L2.11226474,16.5139094 C4.28458265,20.7767214 8.34646708,22.9983719 11.6367422,22.9983719"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M5.65983008,13.7146806 C5.45348086,13.0906884 5.33649734,12.4259466 5.33649734,11.7434859 C5.33649734,11.0610251 5.45348086,10.3962833 5.65983008,9.77229119 L5.65983008,6.97306244 L2.11226474,6.97306244 C1.40475849,8.42938394 1,10.0368082 1,11.7434859 C1,13.4501635 1.40475849,15.0575878 2.11226474,16.5139094 L5.65983008,13.7146806"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M11.6367422,5.36911673 C13.1439791,5.36911673 14.4944926,5.89550699 15.5453573,6.8855476 L18.6016199,3.82928503 C16.9048282,2.25577443 14.5200327,1.3 11.6367422,1.3 C8.34646708,1.3 4.28458265,3.52165053 2.11226474,7.78446255 L5.65983008,10.583741 C6.49225198,8.0690949 8.85538118,6.18056647 11.6367422,6.18056647"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;